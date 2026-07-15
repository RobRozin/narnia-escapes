export function EventsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="events"
        class="relative overflow-hidden py-12 md:py-20 bg-transparent js-parallax-section scroll-mt-20"
      >
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid gap-10 lg:grid-cols-2 items-start relative">
            <div class="order-1 relative z-0 lg:-mt-8" data-parallax="back">
              <div
                v-scope="PhotoPile({ photos: eventPhotos, label: 'Private events photo gallery' })"
              ></div>
            </div>

            <div
              class="order-2 relative z-10 lg:-ml-12 xl:-ml-16 -mt-3 lg:-mt-2"
              data-parallax="front"
            >
              <div
                class="rounded-3xl border border-ash bg-offwhite shadow-xl p-6 md:p-8"
              >
                <header>
                  <h2
                    class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-smoke"
                  >
                    Private Events
                  </h2>
                </header>

                <p class="mt-4 text-neutral-700">
                  Create a gathering that feels intimate, grounded, and entirely
                  your own in a secluded woodland setting.
                </p>

                <ul class="mt-5 grid grid-cols-3 gap-2" aria-label="Private event experience highlights">
                  <li class="rounded-xl bg-secondary px-2 py-3 text-center text-xs font-semibold text-secondary-foreground sm:text-sm">
                    Nature-First Setting
                  </li>
                  <li class="rounded-xl bg-secondary px-2 py-3 text-center text-xs font-semibold text-secondary-foreground sm:text-sm">
                    Tailored Hosting
                  </li>
                  <li class="rounded-xl bg-secondary px-2 py-3 text-center text-xs font-semibold text-secondary-foreground sm:text-sm">
                    Wellness Rituals
                  </li>
                </ul>

                <div
                  id="eventsDetails"
                  class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm overflow-hidden transition-all duration-300 ease-out"
                  :class="isServiceDetailsVisible('events') ? 'mt-6 max-h-[900px] opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'"
                  :aria-hidden="isServiceDetailsVisible('events') ? 'false' : 'true'"
                  :inert="!isServiceDetailsVisible('events')"
                >
                  <ul class="space-y-2 text-neutral-700">
                    <li
                      v-for="item in eventHighlightsLeft"
                      :key="item"
                      class="flex items-start gap-2"
                    >
                      <span
                        class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
                      ></span>
                      <span v-text="item"></span>
                    </li>
                  </ul>
                  <ul class="space-y-2 text-neutral-700">
                    <li
                      v-for="item in eventHighlightsRight"
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

                <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <div
                    v-scope="InfoToggle({ isOpen: isEventsDetailsOpen, labelOpen: 'Less Info', labelClosed: 'More Info', controlsId: 'eventsDetails', className: 'w-full sm:w-auto', onToggle: () => openServiceDetails('events') })"
                  ></div>
                  <div
                    v-scope="Button({ text: 'Book Private Event', href: getBookingHref('event'), target: getBookingTarget('event'), rel: getBookingRel('event'), variant: 'primary', size: 'lg', className: 'w-full sm:w-auto', iconPath: 'M8 7V3m8 4V3M4 11h16M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z', onClick: () => prepareBooking('event') })"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
