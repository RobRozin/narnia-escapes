export function Navbar() {
  return {
    /*html*/
    $template: `
      <header
        :class="{
          'backdrop-blur-md bg-white/70 text-body shadow-sm': isScrolled || isMobileMenuOpen,
          'bg-transparent text-white': !isScrolled && !isMobileMenuOpen
        }"
        class="fixed inset-x-0 top-0 z-50 transition-colors duration-300 pt-[env(safe-area-inset-top)]"
      >
        <nav
          class="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out"
          :class="[isScrolled ? 'py-2' : 'py-4']"
        >
          <a
            href="#home"
            class="flex items-center gap-2 transition-all duration-300 ease-out"
            :class="[isScrolled ? 'scale-[0.96]' : 'scale-100']"
          >
            <img
              src="./images/logo.png"
              alt="Narnia Escapes logo"
              class="transition-all duration-300 ease-out"
              :class="[isScrolled ? 'w-12' : 'w-16']"
            />
            <span
              class="font-accent tracking-tight transition-all duration-300 ease-out"
              :class="[isScrolled ? 'text-2xl' : 'text-3xl']"
            >
              Narnia Escapes
            </span>
          </a>

          <div
            class="hidden md:flex items-center transition-all duration-300 ease-out"
            :class="[isScrolled ? 'gap-5' : 'gap-6']"
          >
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="item.href"
              class="hover:text-primary transition-colors"
              :class="[isScrolled ? 'text-xs font-medium' : 'text-sm font-medium']"
              v-text="item.label"
            ></a>

            <a
              href="#contact"
              class="ml-2 inline-flex items-center rounded-full bg-primary text-white shadow hover:opacity-90 transition-all duration-300 ease-out"
              :class="[isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm']"
            >
              Book Your Escape
            </a>
          </div>

          <button
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>

        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute inset-x-0 top-full bg-offwhite border-t border-accent-soft/20 shadow-lg z-40"
        >
          <nav class="px-5 py-4 space-y-12 text-center">
            <a
              v-for="(item, index) in navItems"
              :key="item.id"
              :href="item.href"
              @click="isMobileMenuOpen=false"
              class="block text-lg font-medium text-ink hover:text-primary"
              :class="[index === 0 ? 'mt-6' : '']"
              v-text="item.label"
            ></a>

            <a
              href="#contact"
              @click="isMobileMenuOpen=false"
              class="block w-full rounded-full bg-primary text-white text-center font-semibold py-3 shadow hover:opacity-95"
            >
              Book Your Escape
            </a>
          </nav>
        </div>
      </header>
    `,
  };
}
