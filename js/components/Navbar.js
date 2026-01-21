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
          class="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 ease-out"
          :class="[
            isScrolled ? 'py-2 transition-all duration-300' : 'py-4'
          ]"
        >
          <a
            href="#home"
            class="flex items-center gap-2 ease-out"
            :class="[
              isScrolled
                ? 'scale-[0.96] opacity-100 translate-y-0 transition-all duration-300'
                : 'scale-100 opacity-0 -translate-y-2 pointer-events-none'
            ]"
          >
            <img
              src="./images/logo.png"
              alt="Narnia Escapes logo"
              class="transition-all duration-300 ease-out"
              :class="[isScrolled ? 'w-12' : 'w-16']"
            />
            <span
              class="font-accent tracking-tight transition-all duration-300 ease-out translate-y-[1px]"
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
              class="hover:text-tan transition-colors"
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
          class="md:hidden fixed inset-x-0 top-0 h-[100svh] bg-offwhite shadow-lg z-40"
        >
          <div
            class="flex h-full flex-col px-5 pt-[env(safe-area-inset-top)]"
          >
            <div class="flex items-center justify-between py-4">
              <a href="#home" class="flex items-center gap-2">
                <img
                  src="./images/logo.png"
                  alt="Narnia Escapes logo"
                  class="w-12"
                />
                <span class="font-accent text-2xl tracking-tight text-neutral-900">
                  Narnia Escapes
                </span>
              </a>
              <button
                class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                @click="isMobileMenuOpen = false"
                aria-label="Close menu"
              >
                <svg
                  class="h-6 w-6 text-neutral-900"
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
            </div>

            <nav class="flex flex-1 flex-col items-center justify-center gap-10 text-center">
              <a
                v-for="item in navItems"
                :key="item.id"
                :href="item.href"
                @click="isMobileMenuOpen=false"
                class="text-lg font-medium text-neutral-900 hover:text-tan"
                v-text="item.label"
              ></a>
            </nav>

            <div class="pb-6">
              <a
                href="#contact"
                @click="isMobileMenuOpen=false"
                class="block w-full rounded-full bg-primary text-white text-center font-semibold py-3 shadow hover:opacity-95"
              >
                Book Your Escape
              </a>
            </div>
          </div>
        </div>
      </header>
    `,
  };
}
