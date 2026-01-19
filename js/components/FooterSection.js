export function FooterSection() {
  return {
    /*html*/
    $template: `
      <footer class="border-t bg-neutral-50">
        <div
          class="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-600"
        >
          <p>(c) 2026 Narnia Escapes. All rights reserved.</p>
          <div class="mt-4 sm:mt-0 flex gap-4">
            <a
              v-for="link in footerLinks"
              :key="link.id"
              :href="link.href"
              target="_blank"
              class="hover:text-primary"
              v-text="link.label"
            ></a>
          </div>
        </div>
      </footer>
    `,
  };
}
