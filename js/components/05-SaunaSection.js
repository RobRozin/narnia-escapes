export function SaunaSection() {
  return {
    /*html*/
    $template: `
      <section
        id="sauna"
        class="relative overflow-hidden py-12 md:py-20 bg-[url('./images/background-bronze.png')] bg-cover bg-center bg-no-repeat js-parallax-section scroll-mt-20"
      >
        <div
          aria-hidden
          class="pointer-events-none absolute inset-x-0 top-0 z-20 h-[46px] bg-[url('./images/background-mask.png')] bg-[length:100%_100%] bg-top bg-no-repeat"
        ></div>
        <div
          class="mx-auto max-w-6xl px-6 grid items-start lg:grid-cols-2 gap-10 lg:gap-12 relative"
        >
          <div
            class="relative order-2 z-10 lg:col-start-1 lg:row-start-1 lg:-mr-12 xl:-mr-16 -mt-3 lg:-mt-2"
            data-parallax="front"
          >
            <article
              class="rounded-3xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-xl p-6 sm:p-8"
            >
              <header>
                <h2
                  class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-tan"
                >
                  Sauna Experience
                </h2>
              </header>

              <p class="mt-4 text-neutral-700">
                A wood-fired sauna by the pond for a four-hour reset of heat, cold,
                and calm that lingers long after.
              </p>

              <ul class="mt-5 grid grid-cols-3 gap-2" aria-label="Sauna quick facts">
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  $100 / person
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  4 hours
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-tan sm:text-sm">
                  Minimum 3 guests
                </li>
              </ul>

              <div
                id="saunaDetails"
                class="space-y-6 overflow-hidden transition-all duration-300 ease-out"
                :class="isServiceDetailsVisible('sauna') ? 'mt-6 max-h-[1400px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                :aria-hidden="isServiceDetailsVisible('sauna') ? 'false' : 'true'"
                :inert="!isServiceDetailsVisible('sauna')"
              >
                <div>
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
                    Book online at least one week in advance. A deposit of
                    <span class="font-medium">20%</span> of your party's total can
                    be collected through Square when booking.
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div
                  v-scope="InfoToggle({ isOpen: isSaunaDetailsOpen, labelOpen: 'Less Info', labelClosed: 'More Info', controlsId: 'saunaDetails', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('sauna') })"
                ></div>
                <div
                  v-scope="Button({ text: 'Book Sauna Session', href: getBookingHref('sauna'), target: getBookingTarget('sauna'), rel: getBookingRel('sauna'), variant: 'secondary', size: 'lg', className: 'w-full sm:w-auto', iconPath: 'M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z', onClick: () => prepareBooking('sauna') })"
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
            class="relative order-1 z-0 lg:col-start-2 lg:row-start-1 lg:-mt-8"
            data-parallax="back"
          >
            <div
              v-scope="PhotoPile({ photos: saunaPhotos, label: 'Sauna experience photo gallery' })"
            ></div>
          </div>
        </div>
      </section>
    `,
  };
}
