tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        heading: ['"Cormorant Garamond"', "serif"],
        accent: ['"Vollkorn SC"', "serif"],
      },
      colors: {
        // 🌿 Typography (INK IS BACK)
        ink: "#24251F", // deep pine-charcoal (anchor color)
        heading: "#24251F", // headings use ink
        body: "#2E2F28", // slightly softer than headings
        muted: "#7E6A52", // muted bronze-brown

        // 🌞 Brand / UI system (pastel, logo-led)
        primary: {
          DEFAULT: "#C89A73", // muted ochre / badge tone
          foreground: "#F6F1E7",
          hover: "#B88660",
        },
        secondary: {
          DEFAULT: "#6F7452", // muted olive
          foreground: "#F6F1E7",
          hover: "#5F6446",
        },

        // 🌲 Deep nature tones (NEW)
        evergreen: "#3F4737", // dark moss / pine (hero overlays, nav bg)
        charcoal: "#24251F", // alias for ink (footer, text, dividers)

        accent: {
          DEFAULT: "#9A7A5E", // muted bronze
          soft: "#C8BEB2", // warm stone
        },

        // 🪶 Neutrals & Backgrounds
        offwhite: "#F6F1E7", // warm paper
        ballet: "#EEE5DA", // linen
        ash: "#C8BEB2", // stone
        bronze: "#9A7A5E",
        marmalade: "#C89A73",
        tan: "#6F7452",

        // 🌗 Layout aliases (THIS is where balance lives)
        background: {
          DEFAULT: "#F6F1E7",
          section: "#EEE5DA",
          card: "#F2ECE2",
          footer: "#24251F", // deep anchor restored
          overlay: "#3F4737", // hero / image overlays
        },
        text: {
          DEFAULT: "#2E2F28",
          light: "#7E6A52",
          inverse: "#F6F1E7",
          strong: "#24251F", // emphasis text
        },
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        contactPop: {
          "0%": { opacity: 0, transform: "translateY(14px) scale(0.96)" },
          "60%": { opacity: 1, transform: "translateY(-6px) scale(1.02)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
        "contact-pop": "contactPop 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
};
