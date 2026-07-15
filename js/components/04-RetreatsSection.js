export function RetreatsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="retreats"
        class="relative overflow-hidden py-12 md:py-20 bg-[url('./images/background-dark-tan.png')] bg-center bg-repeat-y js-parallax-section scroll-mt-20"
        style="background-size: max(100vw, 1672px) auto"
      >
        <div
          aria-hidden
          class="pointer-events-none absolute inset-x-0 top-0 z-20 h-[46px] bg-[url('./images/background-mask.png')] bg-[length:100%_100%] bg-top bg-no-repeat"
        ></div>
        <div
          class="mx-auto max-w-6xl px-6 grid items-start lg:grid-cols-2 gap-10 lg:gap-12 relative"
        >
          <div class="relative order-1 z-0 lg:-mt-8" data-parallax="back">
            <div
              v-scope="PhotoPile({ photos: retreatPhotos, label: 'Guided retreat photo gallery' })"
            ></div>
          </div>

          <div
            class="relative order-2 z-10 lg:col-start-2 lg:-ml-12 xl:-ml-16 -mt-3 lg:-mt-2"
            data-parallax="front"
          >
            <article
              class="rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-xl p-6 sm:p-8 will-change-transform"
            >
              <header>
                <h2
                  class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-tan"
                >
                  Guided Retreats
                </h2>
              </header>

              <div class="mt-4">
                <p class="text-neutral-700 leading-relaxed">
                  A 3-4 day immersion for up to 8 guests, blending breathwork,
                  sound baths, sauna rituals, meals, and deep nature connection.
                </p>
              </div>

              <ul class="mt-5 grid grid-cols-3 gap-2" aria-label="Retreat quick facts">
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  3–4 days
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  Up to 8 guests
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  Meals included
                </li>
              </ul>

              <footer class="mt-5 flex justify-center">
                <div
                  class="w-full sm:w-auto"
                  v-scope="InfoToggle({ isOpen: isRetreatDetailsOpen, labelOpen: 'Less Info', labelClosed: 'More Info', controlsId: 'retreatDetails', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('retreat') })"
                ></div>
              </footer>

              <div
                id="retreatDetails"
                class="grid gap-8 overflow-hidden transition-all duration-300 ease-out"
                :class="isServiceDetailsVisible('retreat') ? 'mt-6 max-h-[1400px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                :aria-hidden="isServiceDetailsVisible('retreat') ? 'false' : 'true'"
                :inert="!isServiceDetailsVisible('retreat')"
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

              <section
                class="mt-6 rounded-2xl border border-secondary/15 bg-offwhite/70 p-4 text-center"
                aria-labelledby="retreat-dates-heading"
              >
                <h3
                  id="retreat-dates-heading"
                  class="text-xs font-semibold uppercase text-muted"
                >
                  Upcoming Retreat Dates
                </h3>

                <div class="mt-4 grid gap-3 sm:grid-cols-3">
                  <a
                    v-for="retreatDate in retreatDates"
                    :key="retreatDate.href"
                    :href="retreatDate.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="'Reserve spot for the ' + retreatDate.label + ', ' + retreatDate.year + ' guided retreat'"
                    class="group inline-flex min-h-[68px] flex-col items-center justify-center rounded-full bg-secondary px-4 py-3 text-center text-secondary-foreground shadow-sm transition hover:bg-secondary-hover focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <span
                      class="text-sm font-semibold leading-tight"
                      v-text="retreatDate.label"
                    ></span>
                    <span
                      class="mt-1 text-[11px] font-semibold uppercase text-secondary-foreground/75 transition group-hover:text-secondary-foreground"
                    >
                      Reserve Spot
                    </span>
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    `,
  };
}
