export function createScrollEffectsFeature() {
  return {
    fired: false,
    isScrolled: false,
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
              { once: true },
            );
          }, i * 20);
        });
      }
    },
    checkScroll() {
      const y = window.scrollY || 0;
      this.isScrolled = y > 300;
    },
    onScroll() {
      window.requestAnimationFrame(() => {
        this.checkScroll();
        this.triggerHighlights();
        // Newsletter trigger intentionally disabled until a future implementation.
      });
    },
  };
}
