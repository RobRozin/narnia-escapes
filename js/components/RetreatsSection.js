export function RetreatsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="retreats"
        class="py-12 md:py-20 bg-ballet js-parallax-section scroll-mt-20"
      >
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
                  Transformative 3-4 day immersions combining breathwork, sound
                  baths, sauna rituals, nourishing meals, and nature connection.
                  <span class="font-medium">Capacity: up to 8 guests.</span>
                </p>
              </div>

              <div class="mt-6 grid gap-8">
                <section>
                  <h3 class="text-lg font-semibold text-tan">
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
                      class="inline-flex items-center gap-2 text-primary hover:underline"
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
                    <h3 class="text-lg font-semibold text-tan">
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
                    <h3 class="text-lg font-semibold text-tan">Meals</h3>
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
              </div>

              <footer class="mt-8">
                <div
                  class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p class="text-base sm:text-lg text-neutral-900 sm:flex-1">
                    <span class="font-semibold">Typical Retreat:</span>
                    $600-$1,000
                    <span class="block text-sm text-neutral-500 italic">
                      * Varies by season &amp; length
                    </span>
                  </p>

                  <div class="flex flex-col sm:flex-row gap-4 sm:flex-shrink-0">
                    <div
                      v-scope="Button({ text: 'Inquire About Dates', href: '#contact', variant: 'primary', size: 'lg', className: 'w-full sm:w-auto', iconPath: 'M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z', onClick: () => updateContactMessage('retreat') })"
                    ></div>
                    <!--
                      <a
                        href="#retreats-details"
                        class="inline-flex w-full sm:w-auto items-center justify-center rounded-full ring-1 ring-primary/30 px-6 py-3 text-primary font-medium hover:bg-primary/5"
                      >
                        See What's Included
                      </a>
                    -->
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    `,
  };
}
