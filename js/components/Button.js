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
    block ? "w-full" : "",
    disabled ? "opacity-60 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    ...props,
    text,
    href,
    type,
    classes,
    disabled,
    ariaLabel,
    target,
    rel,
    onClick,
    $template: href
      ? /*html*/
        `<a :href="href" :class="classes" :aria-label="ariaLabel" :aria-disabled="disabled ? 'true' : null" :target="target" :rel="rel" @click="onClick && onClick()">
           <span v-text="text"></span>
         </a>`
      : /*html*/
        `<button :type="type" :class="classes" :disabled="disabled" :aria-label="ariaLabel" @click="onClick && onClick()">
           <span v-text="text"></span>
         </button>`,
  };
}
