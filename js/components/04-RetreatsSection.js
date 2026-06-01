export function RetreatsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="retreats"
        class="relative py-12 md:py-20 bg-[url('./images/background-dark-tan.png')] bg-cover bg-center bg-no-repeat js-parallax-section scroll-mt-20"
      >
        <div
          aria-hidden
          class="pointer-events-none absolute inset-x-0 top-0 z-20 h-[46px] bg-[url('./images/background-mask.png')] bg-[length:100%_100%] bg-top bg-no-repeat"
        ></div>
        <div
          class="mx-auto max-w-6xl px-6 grid items-start lg:grid-cols-2 gap-10 lg:gap-12 relative"
        >
          <div class="relative order-1 z-0 hidden md:block" data-parallax="back">
            <div
              class="relative aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden rounded-3xl lg:-mt-8 will-change-transform"
            >
              <img
                src="./images/retreats-hero.jpeg"
                alt="Guided nature retreat by the lake"
                class="h-full w-full object-cover"
                loading="lazy"
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div
            class="relative order-2 z-10 lg:col-start-2 lg:-ml-16 xl:-ml-20 -mt-8 lg:-mt-2"
            data-parallax="front"
          >
            <article
              class="rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-xl p-6 sm:p-8 will-change-transform"
            >
              <header class="relative">
                <div
                  class="md:hidden relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t-3xl"
                >
                  <img
                    src="./images/retreats-hero.jpeg"
                    alt="Guided nature retreat by the lake"
                    class="w-full h-64 object-cover object-[25%_65%]"
                    loading="lazy"
                  />

                  <div
                    class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
                  ></div>

                  <h2
                    class="absolute top-4 left-6 sm:left-8 font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-white drop-shadow-md"
                  >
                    Guided Retreats
                  </h2>
                </div>

                <div class="hidden md:block">
                  <h2
                    class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-tan"
                  >
                    Guided Retreats
                  </h2>
                </div>
              </header>

              <div class="mt-4">
                <p class="text-neutral-700 leading-relaxed">
                  A 3-4 day immersion for up to 8 guests, blending breathwork,
                  sound baths, sauna rituals, and deep nature connection.
                </p>
              </div>

              <div
                id="retreatDetails"
                class="grid gap-8 overflow-hidden transition-all duration-300 ease-out"
                :class="isServiceDetailsVisible('retreat') ? 'mt-6 max-h-[1400px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                :aria-hidden="isServiceDetailsVisible('retreat') ? 'false' : 'true'"
              >
                <section>
                  <h3 class="text-lg font-semibold text-body">
                    Retreat Experience
                  </h3>
                  <ul
                    class="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-neutral-800"
                  >
                    <li
                      v-for="item in retreatExperience"
                      :key="item"
                      class="flex items-start gap-2"
                    >
                      <span
                        class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                      ></span>
                      <span v-text="item"></span>
                    </li>
                  </ul>

                  <div class="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                    <a
                      href="#about"
                      class="inline-flex items-center gap-2 text-bronze hover:text-tan transition-colors"
                    >
                      Meet Your Hosts
                      <svg class="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                        />
                      </svg>
                    </a>
                  </div>
                </section>

                <section class="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 class="text-lg font-semibold text-body">
                      Lodging
                    </h3>
                    <p class="mt-1 text-sm text-neutral-600">
                      Rustic cabin designed for comfort and connection.
                    </p>

                    <ul
                      class="mt-3 grid gap-x-6 gap-y-3 text-sm text-neutral-800"
                    >
                      <li
                        v-for="item in retreatLodging"
                        :key="item"
                        class="flex items-start gap-2"
                      >
                        <span
                          class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                        ></span>
                        <span v-text="item"></span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-body">Meals</h3>
                    <p class="mt-1 text-sm text-neutral-600">
                      Wholesome, homemade Eastern European food prepared daily.
                      Breakfast, lunch, dinner + snacks
                    </p>

                    <ul
                      class="mt-3 grid gap-x-6 gap-y-3 text-sm text-neutral-800"
                    >
                      <li
                        v-for="item in retreatMeals"
                        :key="item"
                        class="flex items-start gap-2"
                      >
                        <span
                          class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                        ></span>
                        <span v-text="item"></span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section>
                  <h3 class="text-lg font-semibold text-body">Pricing</h3>
                  <p class="mt-2 text-sm text-neutral-700">
                    Typical retreat range: $600-$1,000.
                  </p>
                  <p class="mt-1 text-xs text-neutral-500 italic">
                    Varies by season and length.
                  </p>
                </section>
              </div>

              <footer class="mt-8">
                <div class="flex flex-col gap-3 sm:flex-shrink-0">
                  <div
                    v-scope="Button({ text: 'Inquire About Dates', href: '#contact', variant: 'secondary', size: 'lg', className: 'w-full sm:w-auto', iconPath: 'M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z', onClick: () => updateContactMessage('retreat') })"
                  ></div>
                  <div
                    v-if="!isDesktopViewport"
                    v-scope="InfoToggle({ isOpen: isRetreatDetailsOpen, labelOpen: 'Hide retreat details', labelClosed: 'View retreat details', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('retreat') })"
                  ></div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    `,
  };
}
