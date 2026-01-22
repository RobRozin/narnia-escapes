export function SaunaSection() {
  return {
    /*html*/
    $template: `
      <section
        id="sauna"
        class="py-12 md:py-20 bg-offwhite js-parallax-section scroll-mt-20"
      >
        <div
          class="mx-auto max-w-6xl px-6 grid items-start lg:grid-cols-2 gap-10 lg:gap-12 relative"
        >
          <div
            class="relative order-2 md:order-1 z-10 lg:col-start-1 lg:-mr-16 xl:-mr-20 -mt-8 lg:-mt-2"
            data-parallax="front"
          >
            <article
              class="rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-xl p-6 sm:p-8"
            >
              <header class="relative">
                <div
                  class="md:hidden relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t-3xl"
                >
                  <img
                    src="./images/sauna-hero.jpeg"
                    alt="Traditional wood-burning sauna beside the pond"
                    class="w-full h-64 object-cover object-[25%_55%]"
                  />

                  <div
                    class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
                  ></div>

                  <h2
                    class="absolute top-4 left-6 sm:left-8 font-accent font-semibold text-3xl tracking-tight text-white drop-shadow-md"
                  >
                    Sauna Experience
                  </h2>
                </div>

                <div class="hidden md:block">
                  <h2
                    class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-tan"
                  >
                    Sauna Experience
                  </h2>
                </div>
              </header>

              <p class="mt-4 text-neutral-700">
                A wood-fired sauna by the pond for a four-hour reset of heat, cold,
                and calm that lingers long after.
              </p>

              <div
                id="saunaDetails"
                class="space-y-6 overflow-hidden transition-all duration-300 ease-out"
                :class="isSaunaDetailsOpen ? 'mt-6 max-h-[1400px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                :aria-hidden="isSaunaDetailsOpen ? 'false' : 'true'"
              >
                <div>
                  <h3 class="text-lg font-semibold text-body">Standard Sauna Session</h3>
                  <p class="mt-2 text-sm font-medium text-neutral-700">
                    $100 per person · 4-hour session · Minimum 3 guests
                  </p>
                </div>

                <div class="border-t border-neutral-200/70 pt-4">
                  <div class="text-sm font-medium text-neutral-900">Included</div>
                  <ul class="mt-2 space-y-1.5 text-sm text-neutral-700">
                    <li
                      v-for="item in saunaIncluded"
                      :key="item"
                      class="flex items-start gap-2"
                    >
                      <span
                        class="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400"
                      ></span>
                      <span v-text="item"></span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div class="text-sm font-medium text-neutral-900">
                    Optional Add-Ons
                  </div>
                  <ul class="mt-3 space-y-2 text-sm text-neutral-700">
                    <li
                      v-for="item in saunaAddOns"
                      :key="item.label"
                      class="flex items-start justify-between gap-3"
                    >
                      <span class="flex items-start gap-2">
                        <span
                          class="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400"
                        ></span>
                        <span>
                          <span v-text="item.label"></span>
                          <span
                            v-if="item.note"
                            class="text-neutral-500"
                            v-text="' ' + item.note"
                          ></span>
                        </span>
                      </span>
                      <span class="text-neutral-900 font-medium" v-text="item.price"></span>
                    </li>
                  </ul>
                  <p class="mt-2 text-xs text-neutral-500">
                    Add-ons are optional and can be added when booking.
                  </p>
                </div>

                <div
                  class="rounded-xl border border-primary/15 bg-primary/5 p-4"
                >
                  <p class="text-[13px] leading-5 text-neutral-700">
                    <span class="font-medium text-neutral-800">Booking:</span>
                    Please request at least one week in advance. A deposit of
                    <span class="font-medium">20%</span> of your party's total is
                    required upon booking.
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-col gap-4">
                <div
                  v-scope="Button({ text: 'Reserve a Session', href: '#contact', variant: 'secondary', size: 'lg', className: 'w-full sm:w-auto', iconPath: 'M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z', onClick: () => updateContactMessage('sauna') })"
                ></div>
                <div
                  v-if="!isSaunaDetailsOpen"
                  v-scope="InfoToggle({ isOpen: isSaunaDetailsOpen, labelOpen: &quot;Hide what's included&quot;, labelClosed: &quot;See what's included&quot;, className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('sauna') })"
                ></div>
                <!-- <a
                  href="/sauna"
                  class="inline-flex items-center justify-center rounded-full ring-1 ring-primary/30 px-6 py-3 text-primary font-medium hover:bg-primary/5"
                >
                  More Info
                </a> -->
              </div>
            </article>
          </div>

          <div
            class="relative order-1 md:order-2 z-0 hidden md:block"
            data-parallax="back"
          >
            <div
              class="relative aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden rounded-3xl lg:-mt-8"
            >
              <img
                src="./images/sauna-hero.jpeg"
                alt="Traditional wood-burning sauna beside the pond"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
