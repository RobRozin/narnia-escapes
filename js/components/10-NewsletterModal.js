export function NewsletterModal() {
  return {
    /*html*/
    $template: `
      <div>
        <div
          v-show="nlOpen"
          class="fixed inset-0 z-[70] bg-evergreen/45 backdrop-blur-sm"
          @click="dismissNewsletter()"
          aria-hidden="true"
        ></div>

        <section
          v-show="nlOpen && isDesktopViewport"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nl-title"
          class="fixed inset-0 z-[80] grid place-items-center p-4"
        >
          <div class="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-offwhite shadow-2xl ring-1 ring-black/10 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              class="relative min-h-[34rem] bg-cover bg-center"
              style="background-image: url('./images/main-hero-fall.png')"
              aria-hidden="true"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-smoke/80 via-smoke/50 to-secondary/60"></div>
              <div class="absolute inset-x-0 bottom-0 p-8 text-offwhite">
                <p class="font-accent text-sm tracking-[0.24em] uppercase text-offwhite">
                  Narnia Journal
                </p>
                <p class="mt-4 max-w-sm text-3xl font-heading leading-tight">
                  Retreat drops, sauna dates, and seasonal gatherings before they fill.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col justify-center p-8 md:p-10">
              <button
                type="button"
                class="absolute right-4 top-4 rounded-full border border-neutral-300 p-2 text-neutral-500 transition hover:border-neutral-400 hover:text-neutral-800"
                aria-label="Close newsletter signup"
                @click="dismissNewsletter()"
              >
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <p class="text-sm font-medium uppercase tracking-[0.22em] text-secondary">
                Join the list
              </p>
              <h2 id="nl-title" class="mt-3 font-heading text-4xl leading-none text-charcoal">
                Stay close to the next escape.
              </h2>
              <p class="mt-4 max-w-md text-base leading-relaxed text-neutral-700">
                Get first notice for retreat releases, private sauna openings, and one-off events at the property.
              </p>

              <form class="mt-8 grid gap-4" @submit.prevent="submitNewsletter">
                <label for="nl-email" class="text-sm font-medium text-neutral-800">
                  Email address
                </label>
                <input
                  id="nl-email"
                  v-model="nlEmail"
                  type="email"
                  required
                  autocomplete="email"
                  inputmode="email"
                  placeholder="you@example.com"
                  class="w-full rounded-2xl border border-ash bg-ballet px-4 py-3 text-base text-neutral-900 shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />

                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-60"
                  :disabled="isNewsletterSubmitting()"
                >
                  <span v-text="isNewsletterSubmitting() ? 'Saving...' : 'Subscribe'"></span>
                </button>

                <p v-if="nlStatus === 'success'" class="text-sm text-secondary">
                  You're on the list. We'll be in touch when new dates open.
                </p>
                <p v-if="nlStatus === 'error'" class="text-sm text-red-700" v-text="nlError"></p>

                <div class="flex items-center justify-between gap-4 text-xs text-neutral-500">
                  <p>Expect occasional notes only. No spam.</p>
                  <button
                    type="button"
                    class="underline underline-offset-4 transition hover:text-neutral-700"
                    @click="snoozeNewsletter"
                  >
                    Not now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section
          v-show="nlOpen && !isDesktopViewport"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nl-title-mobile"
          class="fixed inset-x-0 bottom-0 z-[80] px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3"
        >
          <div class="mx-auto max-w-xl overflow-hidden rounded-[1.75rem] bg-offwhite shadow-2xl ring-1 ring-black/10">
            <div class="relative bg-evergreen px-5 py-6 text-offwhite">
              <button
                type="button"
                class="absolute right-3 top-3 rounded-full border border-offwhite/40 p-2 text-offwhite transition hover:bg-offwhite/10"
                aria-label="Close newsletter signup"
                @click="dismissNewsletter()"
              >
                <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <p class="text-xs font-medium uppercase tracking-[0.22em] text-offwhite">
                Join the list
              </p>
              <h2 id="nl-title-mobile" class="mt-2 font-heading text-3xl leading-none">
                Be first to hear about new dates.
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-offwhite">
                Retreat releases, sauna openings, and seasonal gatherings.
              </p>
            </div>

            <form class="grid gap-3 px-5 py-5" @submit.prevent="submitNewsletter">
              <label for="nl-email-mobile" class="text-sm font-medium text-neutral-800">
                Email address
              </label>
              <input
                id="nl-email-mobile"
                v-model="nlEmail"
                type="email"
                required
                autocomplete="email"
                inputmode="email"
                placeholder="you@example.com"
                class="w-full rounded-2xl border border-ash bg-ballet px-4 py-3 text-base text-neutral-900 shadow-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              />

              <button
                type="submit"
                class="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-60"
                :disabled="isNewsletterSubmitting()"
              >
                <span v-text="isNewsletterSubmitting() ? 'Saving...' : 'Subscribe'"></span>
              </button>

              <p v-if="nlStatus === 'success'" class="text-sm text-secondary">
                You're on the list. We'll be in touch when new dates open.
              </p>
              <p v-if="nlStatus === 'error'" class="text-sm text-red-700" v-text="nlError"></p>

              <div class="flex items-center justify-between gap-4 pt-1 text-xs text-neutral-500">
                <p>Occasional updates only.</p>
                <button
                  type="button"
                  class="underline underline-offset-4 transition hover:text-neutral-700"
                  @click="snoozeNewsletter"
                >
                  Not now
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    `,
  };
}
