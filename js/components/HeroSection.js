export function HeroSection() {
  return {
    /*html*/
    $template: `
      <section
        id="home"
        class="relative flex min-h-[100svh] md:min-h-[100dvh] items-center justify-center text-center overflow-hidden"
      >
        <div
          v-if="_isMobile()"
          aria-hidden
          class="absolute inset-0 -z-20 bg-cover bg-center bg-[url('./images/home-hero-mobile-winter.jpg')] blur-[1.5px] scale-105"
        ></div>
        <div
          v-else
          aria-hidden
          class="absolute inset-0 -z-20 bg-cover bg-center bg-[url('./images/home-hero-winter.jpg')] blur-[1.5px] scale-105"
        ></div>
        <div
          aria-hidden
          class="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/35 to-black/70"
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
              Revitalize your body, mind, and spirit by stepping into 40 acres of serene
              forests and guided practices designed to reconnect you
              with nature and yourself.
            </p>

            <div
              class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 opacity-0 animate-fade-in-up"
              style="animation-delay: 470ms"
            >
              <div
                v-scope="Button({ text: 'Book Your Escape', href: '#contact', variant: 'primary', size: 'lg', className: 'shadow w-full sm:w-auto' })"
              ></div>
              <div
                v-scope="Button({ text: 'Explore Retreats', href: '#retreats', variant: 'outline-light', size: 'lg', className: 'w-full sm:w-auto' })"
              ></div>
            </div>
          </div>
        </div>

        <div
          class="pointer-events-none absolute bottom-[calc(1.25rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2"
        >
          <div class="flex flex-col items-center text-white/80">
            <span class="text-xs">Scroll</span>
            <svg viewBox="0 0 24 24" class="mt-1 h-6 w-6 animate-bounce">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </section>
    `,
  };
}
