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
          class="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-black/15 to-black/40"
        ></div>

        <div class="w-full px-6 sm:px-8 lg:px-10">
          <div class="mx-auto max-w-4xl">
            <img
              src="./images/logo.png"
              alt="Narnia Escapes logo"
              class="mx-auto mb-3 w-36 sm:w-20 md:w-24 drop-shadow opacity-0 animate-fade-in-up"
              style="animation-delay: 80ms"
            />
            <h1 class="text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
              <span
                class="block font-accent text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/85 opacity-0 animate-fade-in-up"
                style="animation-delay: 170ms"
              >
                Welcome to
              </span>
              <span
                class="mt-3 block font-accent text-4xl sm:text-7xl md:text-7xl font-semibold tracking-tight opacity-0 animate-fade-in-up"
                style="animation-delay: 260ms"
              >
                Narnia Escapes
              </span>
            </h1>

            <p
              class="mt-5 text-white/90 text-base sm:text-lg leading-relaxed px-1 max-w-xl mx-auto opacity-0 animate-fade-in-up"
              style="animation-delay: 360ms"
            >
              Beyond the trees, a quieter world awaits. Explore wood-fired sauna rituals, seasonal retreats, and private gatherings created for rest, wonder, and reconnection.
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style="animation-delay: 470ms"
            >
              <div
                v-scope="Button({ text: 'Plan Your Escape', href: '#contact', variant: 'primary', size: 'lg', className: 'shadow w-full sm:w-auto' })"
              ></div>
              <div
                v-scope="Button({ text: 'Explore Experiences', href: '#retreats', variant: 'outline-light', size: 'lg', className: 'w-full sm:w-auto' })"
              ></div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
