export function AboutSection() {
  return {
    /*html*/
    $template: `
      <section id="about" class="relative py-14 md:py-24 bg-offwhite scroll-mt-20">
        <div class="mx-auto max-w-6xl px-6">
          <div class="text-center max-w-3xl mx-auto">
            <h2
              class="text-4xl font-heading font-bold tracking-tight text-charcoal uppercase"
            >
              Meet Your Hosts
            </h2>
            <p
              class="mt-4 text-lg text-neutral-700 leading-relaxed text-left md:text-center px-4"
            >
              We created Narnia Escapes to share the things that make us feel alive:
              breathing, cold plunges, wood-fired sauna, sound healing, good food,
              and great company.
            </p>
          </div>

          <div class="mt-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div class="order-2 grid gap-6 lg:order-1 lg:py-6">
              <article class="rounded-3xl border border-ash bg-ballet p-6 shadow-sm sm:p-8">
                <h3 class="text-2xl font-semibold font-accent text-smoke">
                  Stan <span class="text-base font-medium text-muted">(left)</span>
                </h3>
                <p class="mt-3 text-sm leading-relaxed text-neutral-700">
                  Certified Sound Healer, sauna enthusiast, and the guy you'll
                  usually find cooking in the kitchen. Stan loves sharing
                  traditional Eastern European sauna rituals, sound healing,
                  homemade meals, drum circles, and, for those who are interested,
                  traditional hape ceremonies.
                </p>
              </article>

              <article class="rounded-3xl border border-ash bg-ballet p-6 shadow-sm sm:p-8">
                <h3 class="text-2xl font-semibold font-accent text-smoke">
                  Alex <span class="text-base font-medium text-muted">(right)</span>
                </h3>
                <p class="mt-3 text-sm leading-relaxed text-neutral-700">
                  Certified Wim Hof Method Instructor who brings humor to every
                  breathing session. Between the jokes and laughter, he'll guide
                  you through breathing exercises and cold plunges in a way that
                  feels fun, supportive, and surprisingly approachable.
                </p>
              </article>
            </div>

            <div class="order-1 overflow-hidden rounded-3xl shadow-lg lg:order-2">
              <div class="aspect-[3/4] w-full">
                <img
                  src="./images/meet-your-hosts.webp"
                  alt="Stan on the left and Alex on the right, hosts of Narnia Escapes"
                  class="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
