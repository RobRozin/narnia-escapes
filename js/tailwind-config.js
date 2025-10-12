tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        heading: ['"Cormorant Garamond"', "serif"],
        accent: ['"Vollkorn SC"', "serif"],
      },
      colors: {
        // 🌿 Typography
        heading: "#2D2D2D", // Smoke – deep neutral for headings
        body: "#2D2D2D", // same Smoke tone for main text (balanced contrast)
        muted: "#A07F56", // Bronze – for secondary text or labels

        // 🌞 Brand / UI system
        primary: {
          DEFAULT: "#C4784B", // Marmalade Glaze – main CTA/button fill
          foreground: "#F8F4EB", // Off-White text for contrast
          hover: "#B96A3E", // slightly darker hover state
        },
        secondary: {
          DEFAULT: "#817F56", // Dark Tan – grounded olive tone
          foreground: "#F8F4EB", // Off-White text
          hover: "#706E49", // darker olive for hover
        },
        accent: {
          DEFAULT: "#A07F56", // Bronze – warm accent for borders/icons
          soft: "#BCB2A6", // Ash – soft neutral variant
        },

        // 🪶 Neutrals & Backgrounds
        offwhite: "#F8F4EB", // main background
        ballet: "#EDE3DA", // subtle alt section background
        ash: "#BCB2A6", // card surfaces / dividers
        bronze: "#A07F56", // deeper warm neutral
        marmalade: "#C4784B", // warm orange accent
        tan: "#817F56", // olive green tone
        smoke: "#2D2D2D", // deepest gray / footer background

        // 🌗 Aliases for layout
        background: {
          DEFAULT: "#F8F4EB", // default site background
          section: "#EDE3DA", // alternate sections
          card: "#BCB2A6", // raised surfaces
          footer: "#2D2D2D", // footer base
        },
        text: {
          DEFAULT: "#2D2D2D", // main text
          light: "#A07F56", // muted text
          inverse: "#F8F4EB", // text over dark backgrounds
        },
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
      },
    },
  },
};
