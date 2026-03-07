export function createParallaxFeature() {
  return {
    _parallax: {
      enabled: false,
      prefersReduced: false,
      sections: [],
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
        "(prefers-reduced-motion: reduce)",
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
              (section) => section.el === entry.target,
            );
            if (sec) {
              sec.inView = entry.isIntersecting;
              if (sec.inView) anyInView = true;
            }
          }
          if (anyInView) this.startParallax();
          else if (!this._parallax.sections.some((s) => s.inView)) {
            this.stopParallax();
          }
        },
        { root: null, rootMargin: "10% 0px 10% 0px", threshold: [0, 1] },
      );

      this._parallax.sections.forEach((section) => {
        this.updateParallaxSection(section);
        this._parallax.io.observe(section.el);
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
      this._parallax.sections.forEach((section) => {
        if (section.front) {
          section.front.style.transform = "";
          section.front.style.willChange = "";
        }
        if (section.back) {
          section.back.style.transform = "";
          section.back.style.willChange = "";
        }
      });
      this._parallax.sections = [];
      this._parallax.enabled = false;
    },
    updateParallaxSection(section) {
      if (!section.front || !section.back) return;

      const vh = window.innerHeight || document.documentElement.clientHeight;
      const rect = section.el.getBoundingClientRect();
      const eased = this.easeOutCubic(this._progress(rect, vh));

      const frontY = (1 - eased) * this._parallax.frontMax;
      const backY = (1 - eased) * this._parallax.backMax;

      section.front.style.transform = `translate3d(0, ${frontY}px, 0)`;
      section.back.style.transform = `translate3d(0, ${backY}px, 0)`;
    },
    updateParallaxAll: null,
    startParallax() {
      if (this._parallax.rafId) return;
      const tick = () => {
        for (const section of this._parallax.sections) {
          if (section.inView) this.updateParallaxSection(section);
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
  };
}
