export function HighlightsSection() {
  return {
    /*html*/
    $template: `
      <section id="highlights" class="relative py-14 md:py-24 bg-offwhite">
        <div id="highlights-container" class="mx-auto max-w-6xl px-6">
          <header class="text-center">
            <h2
              class="text-4xl font-heading font-bold tracking-tight text-charcoal uppercase"
            >
              Experience Narnia
            </h2>
            <p
              class="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-charcoal/80 md:text-lg"
            >
              Come spend a few days with us. We'll breathe, sweat in the sauna, jump into cold water, share good food, and enjoy the quiet of the forest. If you're not ready for a full retreat, join us for a private sauna session or gather your friends and let us host your own private event.
            </p>
          </header>

          <div
            class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            <div
              v-for="(item, index) in highlights"
              :key="item.id"
              v-scope="HighlightCard({ href: item.href, imgSrc: item.imgSrc, imgAlt: item.imgAlt, title: item.title, text: item.text, delay: index * 20 })"
            ></div>
          </div>
        </div>
      </section>
    `,
  };
}
