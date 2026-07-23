export function SaunaSection() {
  return {
    /*html*/
    $template: `
      <section
        id="sauna"
        class="relative overflow-hidden py-12 md:py-20 bg-transparent js-parallax-section scroll-mt-20"
      >
        <div
          class="mx-auto max-w-6xl px-6 grid items-start lg:grid-cols-2 gap-10 lg:gap-12 relative"
        >
          <div
            class="relative order-2 z-10 lg:col-start-1 lg:row-start-1 lg:-mr-12 xl:-mr-16 -mt-3 lg:-mt-2"
            data-parallax="front"
          >
            <article
              class="rounded-3xl bg-offwhite ring-1 ring-smoke/10 shadow-xl p-6 sm:p-8"
            >
              <header>
                <h2
                  class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-smoke"
                >
                  Sauna Experience
                </h2>
              </header>

              <p class="mt-4 text-neutral-700">
                Our wood-fired sauna is the heart of every retreat. Take a cold
                plunge, relax by the pond, or experience a traditional
                <em>venik</em> massage, where warm oak or birch branches are used
                to gently tap the body, improve circulation, and leave you feeling
                surprisingly refreshed.
              </p>

              <!-- <ul class="mt-5 grid grid-cols-3 gap-2" aria-label="Sauna experience highlights">
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Wood-Fired Heat
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Pondside Calm
                </li>
                <li class="rounded-xl bg-secondary/10 px-2 py-3 text-center text-xs font-semibold text-secondary-hover sm:text-sm">
                  Herbal Tea
                </li>
              </ul> -->

              <div
                id="saunaDetails"
                class="space-y-6 overflow-hidden transition-all duration-300 ease-out"
                :class="isServiceDetailsVisible('sauna') ? 'mt-6 max-h-[1400px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                :aria-hidden="isServiceDetailsVisible('sauna') ? 'false' : 'true'"
                :inert="!isServiceDetailsVisible('sauna')"
              >
                <div>
                  <div class="text-sm font-medium text-neutral-900">
                    Session Details
                  </div>
                  <ul class="mt-2 space-y-1.5 text-sm text-neutral-700">
                    <li>$100 per person</li>
                    <li>4-hour session</li>
                    <li>Minimum 3 guests</li>
                  </ul>
                </div>

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
                  class="rounded-xl border border-ash bg-ballet p-4"
                >
                  <p class="text-[13px] leading-5 text-neutral-700">
                    <span class="font-medium text-neutral-800">Availability:</span>
                    Message us at least one week in advance to confirm availability.
                    Once your session is confirmed, a
                    <span class="font-medium">20%</span> deposit may be collected
                    through Square.
                  </p>
                </div>
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div
                  v-scope="InfoToggle({ isOpen: () => isSaunaDetailsOpen, labelOpen: 'Less Info', labelClosed: 'More Info', controlsId: 'saunaDetails', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('sauna') })"
                ></div>
                <div
                  v-scope="ContactMenu({ menuId: 'sauna-availability', contextId: 'sauna', text: 'Message Us for Availability', placement: 'above', surface: 'light', className: 'w-full sm:w-auto' })"
                ></div>
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
