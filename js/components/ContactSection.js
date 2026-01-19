export function ContactSection() {
  return {
    /*html*/
    $template: `
      <section id="contact" class="py-14 md:py-24 bg-neutral-50 scroll-mt-20">
        <div class="mx-auto max-w-5xl px-6">
          <div class="text-center max-w-2xl mx-auto">
            <h2
              class="text-4xl font-heading font-bold tracking-tight text-neutral-900 uppercase"
            >
              Get in Touch
            </h2>
            <p class="mt-4 px-2 text-lg text-neutral-700 leading-relaxed">
              Ready to plan your retreat?<br />
              Send us a message below - we'll reply on the platform you choose.
            </p>

            <div class="mt-6 text-left">
              <label
                for="contactMessage"
                class="block text-sm font-medium text-neutral-800"
              >
                Your message
              </label>
              <textarea
                id="contactMessage"
                class="mt-2 w-full rounded-xl border border-neutral-300 bg-white p-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary"
                v-model="contactMessage"
                rows="4"
                placeholder="What would you like to explore?"
              ></textarea>
            </div>

            <div
              class="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4"
            >
              <a
                v-for="method in contactMethods"
                :key="method.id"
                class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium shadow hover:opacity-95 active:opacity-90 transition"
                @click.prevent="handleContact(method.id)"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path :d="method.iconPath" />
                </svg>
                <span v-text="method.label"></span>
              </a>
            </div>
          </div>

          <div class="mt-14">
            <h3 class="text-xl font-semibold text-neutral-900 text-center">
              Find Us
            </h3>

            <div
              class="mt-4 block aspect-[16/9] w-full rounded-2xl overflow-hidden shadow ring-1 ring-neutral-200 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.093346624777!2d-74.409268!3d42.638180999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc256dfe685da9%3A0x19d29229d7ad4d7c!2sNarnia%20Escapes!5e0!3m2!1sen!2sus!4v1762991505591!5m2!1sen!2sus"
                width="976"
                height="550"
                style="border: 0"
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
      </section>
    `,
  };
}
