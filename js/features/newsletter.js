export function createNewsletterFeature() {
  return {
    _NL_KEY: "narnia_newsletter_seen_until",
    _NL_THRESHOLD: 0.35,
    _NL_SNOOZE_DAYS: 14,
    _NL_SUB_SNOOZE_DAYS: 180,
    _nlPrefersReduced: false,
    _nlShownThisSession: false,
    _onKeydown: null,
    nlOpen: false,
    nlEmail: "",
    nlStatus: "idle",
    nlError: "",
    newsletterEndpoint: String(
      window.NARNIA_CONFIG?.newsletterEndpoint || "",
    ).trim(),
    _safeGet(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    _safeSet(key, val) {
      try {
        localStorage.setItem(key, val);
      } catch {}
    },
    _futureISO(days) {
      const d = new Date();
      d.setDate(d.getDate() + days);
      return d.toISOString();
    },
    _nlHasActiveSnooze() {
      const until = this._safeGet(this._NL_KEY);
      return Boolean(until && new Date(until) > new Date());
    },
    _nlSnooze(days) {
      this._safeSet(this._NL_KEY, this._futureISO(days));
    },
    _setNewsletterBodyLock(locked) {
      document.documentElement.style.overflow = locked ? "hidden" : "";
      document.body.style.overflow = locked ? "hidden" : "";
    },
    isNewsletterSubmitting() {
      return this.nlStatus === "submitting";
    },
    initNewsletter() {
      this._nlPrefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      this._onKeydown = (event) => {
        if (this.nlOpen && event.key === "Escape") {
          this.dismissNewsletter();
        }
      };
      window.addEventListener("keydown", this._onKeydown);
    },
    destroyNewsletter() {
      if (this._onKeydown) {
        window.removeEventListener("keydown", this._onKeydown);
      }
      this._setNewsletterBodyLock(false);
    },
    triggerNewsletter() {
      if (this._nlShownThisSession || this.nlOpen) return;
      if (this._nlHasActiveSnooze()) return;

      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight || 1;
      const scrolled = (window.scrollY || doc.scrollTop || 0) / maxScroll;

      if (scrolled >= this._NL_THRESHOLD) {
        this._nlShownThisSession = true;
        this.showNewsletter();
      }
    },
    showNewsletter() {
      if (this.nlOpen) return;
      const delay = this._nlPrefersReduced ? 0 : 150;
      window.setTimeout(() => {
        this.nlOpen = true;
        this.nlStatus = "idle";
        this.nlError = "";
        this._setNewsletterBodyLock(true);
      }, delay);
    },
    dismissNewsletter() {
      this.nlOpen = false;
      this.nlStatus = "idle";
      this.nlError = "";
      this._setNewsletterBodyLock(false);
      this._nlSnooze(this._NL_SNOOZE_DAYS);
    },
    snoozeNewsletter() {
      this.dismissNewsletter();
    },
    async submitNewsletter() {
      const email = (this.nlEmail || "").trim().toLowerCase();
      if (!email) {
        this.nlStatus = "error";
        this.nlError = "Enter an email address to subscribe.";
        return;
      }
      if (!this.newsletterEndpoint) {
        this.nlStatus = "error";
        this.nlError =
          "Newsletter endpoint is not configured yet. Add the Google Apps Script URL to window.NARNIA_CONFIG.newsletterEndpoint.";
        return;
      }

      this.nlStatus = "submitting";
      this.nlError = "";

      try {
        const response = await fetch(this.newsletterEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            email,
            source: "website-modal",
            page: window.location.pathname,
            userAgent: navigator.userAgent,
            subscribedAt: new Date().toISOString(),
          }),
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok || result.ok !== true) {
          throw new Error(result.error || "Subscription request failed.");
        }

        this.nlStatus = "success";
        this.nlEmail = "";
        this._nlSnooze(this._NL_SUB_SNOOZE_DAYS);
        window.setTimeout(() => {
          this.nlOpen = false;
          this._setNewsletterBodyLock(false);
        }, 1200);
      } catch (error) {
        this.nlStatus = "error";
        this.nlError =
          error instanceof Error
            ? error.message
            : "We could not save your email right now.";
      }
    },
  };
}
