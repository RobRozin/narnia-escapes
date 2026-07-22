export function RetreatsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="retreats"
        class="relative overflow-hidden py-12 md:py-20 bg-transparent js-parallax-section scroll-mt-20"
      >
        <!-- <div
          aria-hidden
          class="pointer-events-none absolute inset-x-0 top-0 z-20 h-[46px] bg-[url('./images/background-mask.png')] bg-[length:100%_100%] bg-top bg-no-repeat"
        ></div> -->
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
              class="rounded-3xl bg-offwhite ring-1 ring-smoke/10 shadow-xl p-6 sm:p-8 will-change-transform"
            >
              <header>
                <h2
                  class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-smoke"
                >
                  Guided Retreats
                </h2>
              </header>

              <div class="mt-4">
                <p class="text-neutral-700 leading-relaxed">
                  Our retreats are small, relaxed, and personal. Think of it as a
                  weekend getaway with a purpose. We'll breathe together, hike
                  through the woods, sweat in the wood-fired sauna, jump into cold
                  water, share home-cooked meals, relax by the fire, and simply
                  enjoy a few days away from the noise.
                </p>
              </div>

              <!-- <ul class="mt-5 grid grid-cols-3 gap-2" aria-label="Retreat experience highlights">
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Breath + Cold
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Sauna + Sound
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Meals + Lodging
                </li>
              </ul> -->

              <footer class="mt-5 flex justify-center">
                <div
                  class="w-full sm:w-auto"
                  v-scope="InfoToggle({ isOpen: () => isRetreatDetailsOpen, labelOpen: 'Less Info', labelClosed: 'More Info', controlsId: 'retreatDetails', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('retreat') })"
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
                      class="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
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
                      Cozy cabin in the woods, designed for comfort, relaxation,
                      and good company.
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
                      Homemade Eastern European meals, cooked fresh every day.
                      Breakfast, lunch, dinner &amp; snacks.
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
                  <h3 class="text-lg font-semibold text-body">Format &amp; Pricing</h3>
                  <p class="mt-2 text-sm text-neutral-700">
                    Join us Thursday evening and head home Sunday at noon, feeling
                    refreshed (and probably a little braver around cold water).
                  </p>
                  <p class="mt-1 text-sm text-neutral-700">
                    Limited to 8 guests.
                  </p>
                  <p class="mt-1 text-sm font-medium text-neutral-900">
                    $800 per person.
                  </p>
                </section>
              </div>

              <section
                class="mt-6 text-center"
                aria-labelledby="retreat-dates-heading"
              >
                <h3
                  id="retreat-dates-heading"
                  class="text-xs font-semibold uppercase text-muted"
                >
                  Upcoming Retreat Dates
                </h3>

                <div class="mt-4 grid gap-3 sm:grid-cols-3">
                  <div
                    v-for="retreatDate in retreatDates"
                    :key="retreatDate.href"
                    class="flex flex-col rounded-2xl border border-ash bg-ballet p-4"
                  >
                    <span
                      class="text-sm font-semibold leading-tight text-smoke"
                      v-text="retreatDate.label"
                    ></span>
                    <span
                      class="mt-1 mb-4 text-xs font-medium text-muted"
                      v-text="retreatDate.year"
                    ></span>
                    <a
                      :href="retreatDate.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      :aria-label="'Reserve spot for the ' + retreatDate.label + ', ' + retreatDate.year + ' guided retreat'"
                      class="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <svg
                        class="h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                      </svg>
                      <span>Reserve</span>
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    `,
  };
}
