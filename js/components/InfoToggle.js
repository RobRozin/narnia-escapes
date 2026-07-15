export function InfoToggle(props = {}) {
  const {
    isOpen = false,
    labelOpen = "Less info",
    labelClosed = "More info",
    controlsId = null,
    className = "",
    onToggle = null,
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full border border-secondary px-6 py-3 text-base font-medium text-secondary hover:bg-secondary/10 transition-colors",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    ...props,
    isOpen,
    labelOpen,
    labelClosed,
    controlsId,
    className: classes,
    onToggle,
    /*html*/
    $template: `
      <button
        type="button"
        :class="className"
        :aria-expanded="isOpen ? 'true' : 'false'"
        :aria-controls="controlsId"
        @click="onToggle && onToggle()"
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <span v-text="isOpen ? labelOpen : labelClosed"></span>
      </button>
    `,
  };
}
