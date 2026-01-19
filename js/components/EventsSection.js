export function EventsSection() {
  return {
    /*html*/
    $template: `
      <section
        id="events"
        class="py-12 md:py-20 bg-neutral-50 js-parallax-section scroll-mt-20"
      >
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid gap-10 lg:grid-cols-2 items-start relative">
            <div
              class="order-1 relative z-0 lg:-mt-8 xl:-mt-12 hidden md:block"
              data-parallax="back"
            >
              <div
                class="aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-lg bg-neutral-200"
              >
                <img
                  src="./images/events-hero.jpg"
                  alt="Private events with a Narnia vibe"
                  class="h-full w-full object-cover will-change-transform scale-[1.8]"
                />
              </div>
            </div>

            <div
              class="order-2 relative z-10 lg:-ml-16 xl:-ml-20 -mt-8 lg:-mt-2"
              data-parallax="front"
            >
              <div
                class="rounded-3xl border border-neutral-200 bg-white/90 shadow-xl backdrop-blur p-6 md:p-8"
              >
                <header class="relative">
                  <div
                    class="md:hidden relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 overflow-hidden rounded-t-3xl"
                  >
                    <img
                      src="./images/events-hero.jpg"
                      alt="Private events with a Narnia vibe"
                      class="w-full h-64 object-cover object-[25%_50%] will-change-transform scale-[1.6]"
                    />

                    <div
                      class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
                    ></div>

                    <h2
                      class="absolute top-4 left-6 sm:left-8 font-accent font-semibold text-3xl tracking-tight text-white drop-shadow-md"
                    >
                      Private Events
                    </h2>
                  </div>

                  <div class="hidden md:block">
                    <h2
                      class="font-accent font-semibold text-3xl lg:text-4xl tracking-tight text-neutral-900"
                    >
                      Private Events
                    </h2>
                  </div>
                </header>

                <p class="mt-4 text-neutral-700">
                  Bring your workshop or gathering to our magical woodland space --
                  we'll infuse it with the Narnia vibe and take care of the
                  essentials so you can focus on your guests.
                </p>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
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
                <div
                  v-scope="Button({ text: 'Plan Your Event', href: '#contact', variant: 'primary', size: 'lg', className: 'mt-6 w-full sm:w-auto', onClick: () => updateContactMessage('event') })"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
