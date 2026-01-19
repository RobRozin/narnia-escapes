export function HighlightsSection() {
  return {
    /*html*/
    $template: `
      <section id="highlights" class="py-14 md:py-24 bg-white">
        <div id="highlights-container" class="mx-auto max-w-6xl px-6">
          <header class="text-center">
            <h2
              class="text-4xl font-heading font-bold tracking-tight text-neutral-900 uppercase"
            >
              Ways To Experience Narnia
            </h2>
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
