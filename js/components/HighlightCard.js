export function HighlightCard(props = {}) {
  const {
    href = "#",
    imgSrc = "",
    imgAlt = "",
    title = "",
    text = "",
    delay = 0,
  } = props;

  return {
    ...props,
    href,
    imgSrc,
    imgAlt,
    title,
    text,
    delay,
    /*html*/
    $template: `
      <a
        :href="href"
        class="card group relative block aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-ash hover:ring-primary/40 shadow transition-all opacity-0"
        :style="{ animationDelay: delay + 'ms' }"
      >
        <img
          :src="imgSrc"
          :alt="imgAlt"
          class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 p-6">
          <h3 class="font-accent text-2xl text-white drop-shadow-sm">
            <span v-text="title"></span>
          </h3>
          <p class="mt-1 text-sm text-white/90 leading-relaxed">
            <span v-text="text"></span>
          </p>
        </div>
      </a>
    `,
  };
}
