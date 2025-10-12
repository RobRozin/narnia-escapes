async function loadPartial(elId, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const html = await res.text();

  const el = document.getElementById(elId);
  if (!el) {
    console.warn(`[loadPartial] target #${elId} not found when loading ${url}`);
    return; // or throw new Error(...) if you prefer failing fast
  }
  el.innerHTML = html;
}

const app = {
  pages: ["home", "retreats", "sauna", "events", "about"],
  activePage: "home",
  isScrolled: false,
  isMobileMenuOpen: false,
  isCollapsed: false,
  isHidden: false,
  _lastY: 0,
  isModalVisible: false,
  templateMessage: encodeURIComponent(
    "Hello! I'm interested in booking a consultation. Could you please share more information?"
  ),
  services: [
    {
      id: 1,
      accent: "One",
      title: "Complimentary Diagnostics",
      details:
        "Start with a free mini-diagnostic to assess your skin, explain how I can help, and review consultation plans & costs.",
    },
    {
      id: 2,
      accent: "Two",
      title: "Comprehensive Consultation",
      details:
        "In-depth session to analyze your skin type, review your current routine, select the right products, and craft your personalized plan.",
    },
    {
      id: 3,
      accent: "Three",
      title: "Ongoing Support",
      details:
        "Get follow-up support: 5 days included with consultation and an optional 2 months with the option to extend as needed.",
    },
  ],
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

  contactHref(opt) {
    return opt.appendMessage ? opt.href + this.templateMessage : opt.href;
  },
  openService: null,

  // Hero Section Image Animation
  heroImages: [
    { src: "./images/about/hero_about_3.jpg", alt: "Irina 3", show: false },
    { src: "./images/about/hero_about_2.jpg", alt: "Irina 2", show: false },
    { src: "./images/about/hero_about_1.jpg", alt: "Irina 1", show: false },
  ],

  instaPosts: ["first", "second", "third"],

  /* =========================
     In-view Parallax (Depth)
     ========================= */
  _parallax: {
    enabled: false,
    prefersReduced: false,
    sections: [], // [{ el, front, back, inView }]
    io: null,
    rafId: null,
    frontMax: 150, // px (moves a bit more/faster)
    backMax: 10, // px (moves a bit less/slower)
  },

  initParallax() {
    // Respect user motion settings
    this._parallax.prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (this._parallax.prefersReduced) return;

    // Collect all sections that should have the effect
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
      // initial transform hints
      if (front) front.style.willChange = "transform";
      if (back) back.style.willChange = "transform";
      return { el, front, back, inView: false };
    });

    // If nothing to move, bail
    if (!this._parallax.sections.some((s) => s.front && s.back)) return;

    // IntersectionObserver to run RAF only when visible
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

    // Observe all sections + set initial positions
    this._parallax.sections.forEach((s) => {
      this.updateParallaxSection(s);
      this._parallax.io.observe(s.el);
    });

    // Keep in sync on resize
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

  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  },
  _clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  },
  _progress(rect, vh) {
    // 0..1 as the section travels through viewport
    const p = (vh - rect.top) / (vh + rect.height);
    return this._clamp(p, 0, 1);
  },

  updateParallaxSection(sec) {
    if (!sec.front || !sec.back) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = sec.el.getBoundingClientRect();
    const eased = this.easeOutCubic(this._progress(rect, vh));

    // Move from MAX -> 0 as it enters view
    const frontY = (1 - eased) * this._parallax.frontMax;
    const backY = (1 - eased) * this._parallax.backMax;

    sec.front.style.transform = `translate3d(0, ${frontY}px, 0)`;
    sec.back.style.transform = `translate3d(0, ${backY}px, 0)`;
  },

  updateParallaxAll: null, // assigned in mounted

  startParallax() {
    if (this._parallax.rafId) return;
    const tick = () => {
      // Only compute for visible sections
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

    // init parallax (scoped, perf-safe)
    this.updateParallaxAll = () => {
      if (!this._parallax.enabled) return;
      for (const s of this._parallax.sections) this.updateParallaxSection(s);
    };
    this.initParallax();

    const initialPage = window.location.hash.replace("#", "");
    if (initialPage) this.navigateTo(initialPage, false); // Don't push state for initial load
  },

  unmounted() {
    window.removeEventListener("scroll", this.onScroll, { passive: true });
    window.removeEventListener("resize", this.onScroll);
    this.destroyParallax();
  },

  navigateTo(pageId, pushState = true) {
    if (pushState) {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
    this.activePage = pageId;
    this.isMobileMenuOpen = false;

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger hero image animations if on the About page
    if (pageId === "about") {
      this.animateHeroImages();
    }
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
      // Parallax is handled by RAF + IO; nothing needed here.
    });
  },

  // Hero Image Animation Logic
  animateHeroImages() {
    this.heroImages.forEach((image) => (image.show = false));
    this.heroImages.forEach((image, index) => {
      setTimeout(() => {
        image.show = true;
      }, index * 500);
    });
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("mounted");
  PetiteVue.createApp(app).mount("#app");
});
