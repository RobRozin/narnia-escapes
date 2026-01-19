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
          class="absolute inset-0 -z-20 bg-cover bg-center bg-[url('./images/home-hero-fall-mobile.png')]"
        ></div>
        <div
          v-else
          aria-hidden
          class="absolute inset-0 -z-20 bg-cover bg-center bg-[url('./images/home-hero-fall.png')]"
        ></div>
        <div
          aria-hidden
          class="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/55"
        ></div>

        <div class="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
          <h1
            class="font-heading font-bold text-white text-4xl sm:text-6xl md:text-6xl font-semibold tracking-tight"
          >
            Revitalize Your Body,<br />Mind, and Spirit
          </h1>

          <p
            class="mt-5 text-white/90 text-base sm:text-lg leading-relaxed px-1 max-w-md"
          >
            Step into 40 acres of serene forests, healing sauna, and guided
            practices designed to reconnect you with nature and yourself.
          </p>

          <div
            class="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
          >
            <div
              v-scope="Button({ text: 'Book Your Escape', href: '#contact', variant: 'primary', size: 'lg', className: 'shadow w-full sm:w-auto' })"
            ></div>
            <div
              v-scope="Button({ text: 'Explore Retreats', href: '#retreats', variant: 'outline-light', size: 'lg', className: 'w-full sm:w-auto' })"
            ></div>
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
