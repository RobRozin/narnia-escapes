export function FooterSection() {
  return {
    /*html*/
    $template: `
      <footer class="border-t border-white/10 bg-pine text-offwhite">
        <div
          class="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-offwhite/75"
        >
          <p>(c) 2026 Narnia Escapes. All rights reserved.</p>
          <div class="mt-4 sm:mt-0 flex gap-4">
            <a
              v-for="link in footerLinks"
              :key="link.id"
              :href="link.href"
              target="_blank"
              class="hover:text-bronze transition-colors"
              v-text="link.label"
            ></a>
          </div>
        </div>
      </footer>
    `,
  };
}
