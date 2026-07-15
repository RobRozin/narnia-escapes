export function ContactMenu(props = {}) {
  const {
    menuId = "contact",
    contextId = null,
    text = "Send a Message",
    className = "",
    placement = "below",
    surface = "light",
    align = "center",
  } = props;

  const menuPosition =
    placement === "above" ? "bottom-full mb-4" : "top-full mt-4";
  const menuAlignment =
    align === "start"
      ? "left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0"
      : "left-1/2 -translate-x-1/2";
  const menuSurface =
    surface === "glass"
      ? "border-white/25 bg-white/20"
      : "border-ash bg-offwhite/95 ring-1 ring-smoke/10";

  return {
    ...props,
    menuId,
    contextId,
    text,
    className: ["relative", className].filter(Boolean).join(" "),
    menuClasses: [
      "absolute z-30 w-[min(22rem,calc(100vw-3rem))] rounded-2xl border p-4 shadow-xl backdrop-blur-xl transition",
      menuPosition,
      menuAlignment,
      menuSurface,
    ]
      .filter(Boolean)
      .join(" "),
    get contactMethodsId() {
      return `contact-methods-${this.menuId}`;
    },
    selectContactMethod(methodId) {
      this.handleContact(methodId);
    },
    /*html*/
    $template: `
      <div :class="className" @keydown.escape.stop="closeContactMenu(menuId)">
        <div
          v-show="isContactMenuOpen(menuId)"
          class="fixed inset-0 z-20"
          @click="closeContactMenu(menuId)"
        ></div>

        <button
          type="button"
          class="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium shadow hover:bg-primary-hover active:opacity-90 transition sm:w-auto"
          :aria-expanded="isContactMenuOpen(menuId) ? 'true' : 'false'"
          :aria-controls="contactMethodsId"
          @click="toggleContactMenu(menuId, contextId)"
        >
          <span v-text="text"></span>
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 16l-6-6h12l-6 6z" />
          </svg>
        </button>

        <div
          :id="contactMethodsId"
          :class="menuClasses"
          v-show="isContactMenuOpen(menuId)"
        >
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              v-for="(method, index) in contactMethods"
              :key="method.id"
              type="button"
              class="flex items-center gap-3 rounded-xl border bg-offwhite/95 px-4 py-3 text-left text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-offwhite hover:shadow-md"
              :class="isContactMenuOpen(menuId) ? 'animate-contact-pop' : 'opacity-0'"
              :style="{ borderColor: method.brandColor, animationDelay: (index * 90) + 'ms' }"
              @click="selectContactMethod(method.id)"
            >
              <span
                class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                :style="{ backgroundColor: method.brandColor, color: method.brandText || '#FFFFFF' }"
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path :d="method.iconPath" />
                </svg>
              </span>
              <span class="text-base font-medium" v-text="method.label"></span>
            </button>
          </div>
        </div>
      </div>
    `,
  };
}
