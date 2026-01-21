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
        muted: "#817F56", // Dark Tan – for secondary text or labels

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
        bronze: "#A07F56", // accent only (buttons, dividers, icons)
        marmalade: "#C4784B", // CTA accents only
        tan: "#817F56", // primary brand olive tone
        pine: "#2F3B34", // deep evergreen for headers/footers/overlays
        smoke: "#2D2D2D", // primary text / deepest neutral

        // 🌗 Aliases for layout
        background: {
          DEFAULT: "#F8F4EB", // default site background
          section: "#EDE3DA", // alternate sections
          card: "#BCB2A6", // raised surfaces
          footer: "#2F3B34", // deep evergreen footer base
        },
        text: {
          DEFAULT: "#2D2D2D", // main text
          light: "#817F56", // muted text
          inverse: "#F8F4EB", // text over dark backgrounds
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
