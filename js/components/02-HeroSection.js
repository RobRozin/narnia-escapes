export function HeroSection() {
  const seasonalHeroImages = {
    spring: {
      desktop: "./images/main-hero-spring.png",
      mobile: "./images/main-hero-spring-mobile.png",
    },
    summer: {
      desktop: "./images/main-hero-summer.png",
      mobile: "./images/main-hero-summer-mobile.png",
    },
    fall: {
      desktop: "./images/main-hero-fall.png",
      mobile: "./images/main-hero-fall-mobile.png",
    },
    winter: {
      desktop: "./images/main-hero-winter.png",
      mobile: "./images/main-hero-winter-mobile.png",
    },
  };

  return {
    getCurrentSeason(date = new Date()) {
      const month = date.getMonth();
      const day = date.getDate();
      const monthDay = (month + 1) * 100 + day;

      if (monthDay >= 1221 || monthDay < 320) return "winter";
      if (monthDay >= 922) return "fall";
      if (monthDay >= 621) return "summer";
      return "spring";
    },

    getHeroBackgroundImage(isMobile = false) {
      const season = this.getCurrentSeason();
      const variant = isMobile ? "mobile" : "desktop";

      return `url('${seasonalHeroImages[season][variant]}')`;
    },

    /*html*/
    $template: `
      <section
        id="home"
        class="relative flex min-h-[100svh] md:min-h-[100dvh] items-center justify-center text-center overflow-hidden"
      >
        <div
          v-if="_isMobile()"
          aria-hidden
          class="absolute inset-0 -z-20 bg-cover bg-center blur-[0.8px]"
          :style="{ backgroundImage: getHeroBackgroundImage(true) }"
        ></div>
        <div
          v-else
          aria-hidden
          class="absolute inset-0 -z-20 bg-cover bg-center blur-[0.8px]"
          :style="{ backgroundImage: getHeroBackgroundImage(false) }"
        ></div>
        <div
          aria-hidden
          class="absolute inset-0 -z-10 bg-gradient-to-b from-smoke/30 via-smoke/25 to-smoke/70"
        ></div>

        <div class="w-full px-6 sm:px-8 lg:px-10">
          <div class="mx-auto max-w-4xl -translate-y-5 md:-translate-y-10">
            <img
              src="./images/narnia-escapes-logo-main.png"
              alt="Narnia Escapes logo"
              class="mx-auto mb-2 w-28 sm:w-24 drop-shadow opacity-0 animate-fade-in-up md:mb-3"
              style="animation-delay: 80ms"
            />
            <h1 class="text-offwhite drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
              <span
                class="block font-body text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.28em] text-offwhite opacity-0 animate-fade-in-up"
                style="animation-delay: 170ms"
              >
                Welcome to
              </span>
              <span
                class="mt-2 block font-display text-[2rem] sm:mt-3 sm:text-6xl md:text-7xl font-medium tracking-[0.025em] opacity-0 animate-fade-in-up"
                style="animation-delay: 260ms"
              >
                Narnia Escapes
              </span>
            </h1>

            <p
              class="mt-4 md:mt-5 text-offwhite/90 text-base sm:text-lg leading-relaxed px-1 max-w-xl mx-auto opacity-0 animate-fade-in-up"
              style="animation-delay: 360ms"
            >
              No talking lions (so far)... just breathing, cold plunges,
              wood-fired sauna, good food, and a peaceful forest.
            </p>

            <div
              class="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style="animation-delay: 470ms"
            >
              <div
                v-scope="Button({ text: 'Upcoming Retreats', href: '#retreats', variant: 'primary', size: 'lg', className: 'shadow w-full sm:w-auto' })"
              ></div>
              <div
                v-scope="Button({ text: 'Explore Experiences', href: '#highlights', variant: 'outline-light', size: 'lg', className: 'w-full sm:w-auto' })"
              ></div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
