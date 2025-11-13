// app.js

async function loadPartial(elId, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const html = await res.text();

  const el = document.getElementById(elId);
  if (!el) {
    console.warn(`[loadPartial] target #${elId} not found when loading ${url}`);
    return;
  }
  el.innerHTML = html;
}

const app = {
  // ======= State =======
  pages: ["home", "retreats", "sauna", "events", "about"],
  // activePage: "home",
  isScrolled: false,
  isMobileMenuOpen: false,
  isCollapsed: false,
  isHidden: false,
  _lastY: 0,

  contactTypes: {
    sauna:
      "Hello, I'm interested in reserving your sauna. Could you share availability?",
  },

  // Contact message
  contactMessage:
    "Hi! I'm interested in experiencing Narnia Escapes. Could you share details on your sessions and availability?",
  contactTemplates: {
    retreat:
      "Hello! I'm interested in joining one of your upcoming retreats. Could you share more details about locations, pricing, and available dates?",
    sauna:
      "Hi! I'd like to learn more about your sauna sessions. Could you share the schedule, pricing, and whether private bookings are available?",
    event:
      "Hello! I'm interested in hosting a private event. Could you tell me more about available venues, packages, and capacity limits?",
  },
  updateContactMessage(id) {
    const message = this.contactTemplates[id];
    if (message) {
      this.contactMessage = message;
    } else {
      console.warn(`[updateContactMessage] Unknown id: ${id}`);
    }
  },

  // ToDo: Recycle this logic
  contactOptions: [
    {
      id: "telegram",
      label: "Send Message on Telegram",
      href: "https://t.me/irenasmirnowa?text=",
      appendMessage: true,
      color: "#26A5E4",
      note: "Fast",
    },
    {
      id: "instagram",
      label: "Send Message on Instagram",
      href: "https://instagram.com/natur_esthetics",
      appendMessage: false,
      color: "#FF0069",
      note: null,
    },
    {
      id: "whatsapp",
      label: "Message Me on WhatsApp",
      href: "https://wa.me/12154212775",
      appendMessage: true,
      color: "#25D366",
      note: null,
    },
  ],

  fired: false,

  // ======= Newsletter (NEW) =======
  _NL_KEY: "nl_seen_until",
  _NL_THRESHOLD: 0.35, // 35% scroll depth
  _NL_SNOOZE_DAYS: 14, // after dismiss
  _NL_SUB_SNOOZE_DAYS: 180, // after subscribe (~6 months)
  _nlPrefersReduced: false,
  _nlShownThisSession: false,
  nlOpen: false,
  nlEmail: "",

  // ======= Helpers =======
  _encodeMsg(text) {
    return encodeURIComponent((text || "").trim());
  },
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
    return until && new Date(until) > new Date();
  },
  _nlSnooze(days) {
    this._safeSet(this._NL_KEY, this._futureISO(days));
  },

  // ======= Contact actions =======
  openInstagram() {
    // Always fall back to web browser if the IG app isn't installed
    const appLink = `instagram://user?username=narniaescapes`;
    const webLink = `https://instagram.com/narniaescapes`;

    // Try open the app first
    window.location.href = appLink;

    // Fallback to web
    setTimeout(() => {
      window.open(webLink, "blank");
    }, 500);
  },
  openMessenger() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(`https://m.me/narniaescapes?text=${msg}`, "blank");
  },
  openTelegram() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(`https://t.me/mouzerG?text=${msg}`, "blank");
  },
  openEmail() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(
      `mailto:narniaescapes22@gmail.com?subject=Narnia%20Inquiry&body=${msg}`,
      "blank"
    );
  },

  _isMobile() {
    return window.matchMedia("(max-width: 1023.98px)").matches;
  },

  /* =========================
     In-view Parallax (Depth)
     ========================= */
  _parallax: {
    enabled: false,
    prefersReduced: false,
    sections: [], // [{ el, front, back, inView }]
    io: null,
    rafId: null,
    frontMax: 150,
    backMax: 50,
  },

  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  },
  _clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  },
  _progress(rect, vh) {
    const p = (vh - rect.top) / (vh + rect.height);
    return this._clamp(p, 0, 1);
  },

  initParallax() {
    this._parallax.prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (this._parallax.prefersReduced) return;

    const nodes = document.querySelectorAll(".js-parallax-section");
    if (!nodes.length) return;

    this._parallax.enabled = true;
    this._parallax.sections = Array.from(nodes).map((el) => {
      const front =
        el.querySelector('[data-parallax="front"] > *') ||
        el.querySelector('[data-parallax="front"]');
      const back =
        el.querySelector('[data-parallax="back"] > *') ||
        el.querySelector('[data-parallax="back"]');
      if (front) front.style.willChange = "transform";
      if (back) back.style.willChange = "transform";
      return { el, front, back, inView: false };
    });

    if (!this._parallax.sections.some((s) => s.front && s.back)) return;

    this._parallax.io = new IntersectionObserver(
      (entries) => {
        let anyInView = false;
        for (const entry of entries) {
          const sec = this._parallax.sections.find(
            (s) => s.el === entry.target
          );
          if (sec) {
            sec.inView = entry.isIntersecting;
            if (sec.inView) anyInView = true;
          }
        }
        if (anyInView) this.startParallax();
        else if (!this._parallax.sections.some((s) => s.inView))
          this.stopParallax();
      },
      { root: null, rootMargin: "10% 0px 10% 0px", threshold: [0, 1] }
    );

    this._parallax.sections.forEach((s) => {
      this.updateParallaxSection(s);
      this._parallax.io.observe(s.el);
    });

    window.addEventListener("resize", this.updateParallaxAll, {
      passive: true,
    });
  },

  destroyParallax() {
    if (!this._parallax.enabled) return;
    this.stopParallax();
    if (this._parallax.io) this._parallax.io.disconnect();
    window.removeEventListener("resize", this.updateParallaxAll);
    this._parallax.sections.forEach((s) => {
      if (s.front) {
        s.front.style.transform = "";
        s.front.style.willChange = "";
      }
      if (s.back) {
        s.back.style.transform = "";
        s.back.style.willChange = "";
      }
    });
    this._parallax.sections = [];
    this._parallax.enabled = false;
  },

  updateParallaxSection(sec) {
    if (!sec.front || !sec.back) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = sec.el.getBoundingClientRect();
    const eased = this.easeOutCubic(this._progress(rect, vh));

    const frontY = (1 - eased) * this._parallax.frontMax;
    const backY = (1 - eased) * this._parallax.backMax;

    sec.front.style.transform = `translate3d(0, ${frontY}px, 0)`;
    sec.back.style.transform = `translate3d(0, ${backY}px, 0)`;
  },

  updateParallaxAll: null,

  startParallax() {
    if (this._parallax.rafId) return;
    const tick = () => {
      for (const s of this._parallax.sections) {
        if (s.inView) this.updateParallaxSection(s);
      }
      this._parallax.rafId = requestAnimationFrame(tick);
    };
    this._parallax.rafId = requestAnimationFrame(tick);
  },

  stopParallax() {
    if (this._parallax.rafId) {
      cancelAnimationFrame(this._parallax.rafId);
      this._parallax.rafId = null;
    }
  },

  mounted() {
    this._lastY = window.scrollY || 0;
    this.checkScroll();
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll);

    this._parallax.frontMax = this._isMobile() ? 50 : 150;
    this._parallax.backMax = this._isMobile() ? -20 : 10;

    // Parallax
    this.updateParallaxAll = () => {
      if (!this._parallax.enabled) return;
      for (const s of this._parallax.sections) this.updateParallaxSection(s);
    };
    this.initParallax();

    // ======= Newsletter init (NEW) =======
    this._nlPrefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ESC to close newsletter
    window.addEventListener("keydown", (e) => {
      if (this.nlOpen && e.key === "Escape") this.dismissNewsletter("esc");
    });

    const initialPage = window.location.hash.replace("#", "");
    if (initialPage) this.navigateTo(initialPage, false);
  },

  unmounted() {
    window.removeEventListener("scroll", this.onScroll, { passive: true });
    window.removeEventListener("resize", this.onScroll);
    this.destroyParallax();
    this.destroyEdgePull();
  },

  navigateTo(pageId, pushState = true) {
    if (pushState) {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
    // this.activePage = pageId;
    this.isMobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  triggerHighlights() {
    if (this.fired) return;
    const container = document.getElementById("highlights-container");
    if (!container) return;

    const top = container.getBoundingClientRect().top;
    if (top <= 600) {
      this.fired = true;
      const cards = container.querySelectorAll(".card");
      cards.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-fade-in-up");
          el.addEventListener(
            "animationend",
            () => el.classList.remove("opacity-0"),
            { once: true }
          );
        }, i * 20);
      });
    }
  },

  //#region

  //#endregion

  //#region ======= Newsletter =======
  triggerNewsletter() {
    if (this._nlShownThisSession) return;
    if (this._nlHasActiveSnooze()) return;

    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - doc.clientHeight || 1;
    const scrolled = (window.scrollY || doc.scrollTop) / maxScroll;

    if (scrolled >= this._NL_THRESHOLD) {
      this.showNewsletter();
      this._nlShownThisSession = true;
    }
  },

  showNewsletter() {
    const delay = this._nlPrefersReduced ? 0 : 150;
    setTimeout(() => {
      this.nlOpen = true;
    }, delay);
  },

  dismissNewsletter(reason = "dismiss") {
    this.nlOpen = false;
    this._nlSnooze(this._NL_SNOOZE_DAYS);
  },

  snoozeNewsletter() {
    this.nlOpen = false;
    this._nlSnooze(this._NL_SNOOZE_DAYS);
  },

  async subscribeNewsletter() {
    // TODO: hook provider here (Mailchimp/ConvertKit/etc.)
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: this.nlEmail }) })
    this.nlOpen = false;
    this._nlSnooze(this._NL_SUB_SNOOZE_DAYS);
    alert("Thanks for subscribing!");
  },
  //#endregion

  checkScroll() {
    const y = window.scrollY || 0;
    const dy = y - this._lastY;

    this.isScrolled = y > 80;

    const COLLAPSE_AT = 24;
    if (y > COLLAPSE_AT && !this.isCollapsed) this.isCollapsed = true;
    if (y <= COLLAPSE_AT && this.isCollapsed) this.isCollapsed = false;

    if (dy > 4 && y > COLLAPSE_AT && !this.isHidden) this.isHidden = true;
    else if (dy < -6 && this.isHidden) this.isHidden = false;

    if (y <= 0) this.isHidden = false;

    this._lastY = y;
  },

  onScroll() {
    window.requestAnimationFrame(() => {
      this.checkScroll();
      this.triggerHighlights();
      this.triggerNewsletter(); // <— integrated here
      // Parallax uses RAF; edge-pull is throttled in its own listener.
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  PetiteVue.createApp(app).mount("#app");
});
