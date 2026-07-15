export function ContactSection() {
  return {
    /*html*/
    $template: `
      <section id="contact" class="relative py-14 md:py-24 bg-secondary text-offwhite scroll-mt-20">
        <!-- <div
          aria-hidden
          class="pointer-events-none absolute inset-x-0 top-0 z-20 h-[46px] bg-[url('./images/background-mask.png')] bg-[length:100%_100%] bg-top bg-no-repeat"
        ></div> -->
        <div class="mx-auto max-w-5xl px-6">
          <div class="grid items-start gap-12 md:grid-cols-2">
            <div class="text-center md:text-left">
              <h2
                class="text-4xl font-heading font-bold tracking-tight text-offwhite uppercase"
              >
                Get in Touch
              </h2>
              <p class="mt-4 text-lg text-offwhite leading-relaxed px-10 md:px-0">
                Questions, availability, or private bookings —
reach out when you're ready.
              </p>

              <div
                v-scope="ContactMenu({ menuId: 'contact', text: 'Send a Message', placement: 'below', surface: 'glass', align: 'start', className: 'mt-8 flex flex-col items-stretch md:items-start' })"
              ></div>
            </div>

            <div>
              <h3 class="text-xl font-accent text-offwhite text-center md:text-left">
                Find Us
              </h3>

              <div
                class="mt-4 block aspect-[16/9] w-full rounded-2xl overflow-hidden shadow ring-1 ring-neutral-200 relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.093346624777!2d-74.409268!3d42.638180999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc256dfe685da9%3A0x19d29229d7ad4d7c!2sNarnia%20Escapes!5e0!3m2!1sen!2sus!4v1762991505591!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  class="h-full w-full"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <span
                  class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none"
                ></span>

                <a
                  href="https://maps.app.goo.gl/y9GvBGuq72aHAHno9"
                  target="_blank"
                  rel="noopener"
                  class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 ring-1 ring-white/70 backdrop-blur"
                >
                  Open in Google Maps
                  <svg
                    class="h-4 w-4 text-secondary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
