export function AboutSection() {
  return {
    /*html*/
    $template: `
      <section id="about" class="py-14 md:py-24 bg-ballet scroll-mt-20">
        <div class="mx-auto max-w-6xl px-6">
          <div class="text-center max-w-3xl mx-auto">
            <h2
              class="text-4xl font-heading font-bold tracking-tight text-tan uppercase"
            >
              Meet Your Hosts
            </h2>
            <p
              class="mt-4 text-lg text-neutral-700 leading-relaxed text-left md:text-center px-4"
            >
              Together, Alex and Stan create a space of transformation -- weaving
              breath, sauna, sound, and food into a communal retreat experience
              rooted in nature and tradition.
            </p>
          </div>

          <div class="mt-14 grid gap-8 sm:grid-cols-2">
            <div class="relative rounded-3xl overflow-hidden shadow-lg">
              <div class="aspect-[3/4] w-full">
                <img
                  src="./images/host-stan.jpg"
                  alt="Stan - sauna master and sound healer"
                  class="h-full w-full object-cover object-top"
                />
                <div
                  class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-semibold font-accent">Stan</h3>
                  <p class="mt-2 text-sm leading-relaxed text-white/90">
                    Sauna practitioner and sound healer who brings traditional
                    Eastern European sauna rituals, vibration therapy, and hape
                    &amp; medicine ceremonies to the retreat. As a chef, he
                    prepares nourishing homemade meals, and as a musician, he
                    leads drum circles that bring people together in rhythm.
                  </p>
                </div>
              </div>
            </div>

            <div class="relative rounded-3xl overflow-hidden shadow-lg">
              <div class="aspect-[3/4] w-full">
                <img
                  src="./images/host-alex.jpg"
                  alt="Alex - certified Wim Hof instructor"
                  class="h-full w-full object-cover object-top"
                />
                <div
                  class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 class="text-2xl font-semibold font-accent">Alex</h3>
                  <p class="mt-2 text-sm leading-relaxed text-white/90">
                    Certified Wim Hof Method instructor guiding breathwork, cold
                    exposure, and meditation. Known by many as a "witch doctor"
                    for his grounding energy and care, Alex helps participants
                    build resilience, clarity, and deep presence while tending to
                    the retreat grounds and leading practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  };
}
