export function Button(props = {}) {
  const {
    text = "Button",
    href = null,
    type = "button",
    variant = "primary",
    size = "md",
    block = false,
    disabled = false,
    className = "",
    ariaLabel = null,
    target = null,
    rel = null,
    onClick = null, // optional: function handler
    iconPath = null,
    iconPosition = "left",
    iconClass = "h-5 w-5",
  } = props;

  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition";
  const sizes = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-white shadow-sm hover:opacity-95 active:opacity-90",
    "outline-light":
      "border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    "outline-primary": "ring-1 ring-primary/30 text-primary hover:bg-primary/5",
  };
  const classes = [
    base,
    sizes[size] || sizes.md,
    variants[variant] || variants.primary,
    iconPath ? "gap-2" : "",
    block ? "w-full" : "",
    disabled ? "opacity-60 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconMarkup = iconPath
    ? `<svg class="${iconClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
         <path d="${iconPath}" />
       </svg>`
    : "";

  return {
    ...props,
    text,
    href,
    type,
    classes,
    disabled,
    ariaLabel,
    target: href && href.startsWith("#") ? null : target,
    rel: href && href.startsWith("#") ? null : rel,
    onClick,
    iconPath,
    iconPosition,
    iconClass,
    $template: href
      ? /*html*/
        `<a :href="href" :class="classes" :aria-label="ariaLabel" :aria-disabled="disabled ? 'true' : null" :target="target" :rel="rel" @click="onClick && onClick()">
           ${iconPosition === "right" ? "" : iconMarkup}
           <span v-text="text"></span>
           ${iconPosition === "right" ? iconMarkup : ""}
         </a>`
      : /*html*/
        `<button :type="type" :class="classes" :disabled="disabled" :aria-label="ariaLabel" @click="onClick && onClick()">
           ${iconPosition === "right" ? "" : iconMarkup}
           <span v-text="text"></span>
           ${iconPosition === "right" ? iconMarkup : ""}
         </button>`,
  };
}
