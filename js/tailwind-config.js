tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        heading: ['"Cormorant Garamond"', "serif"],
        accent: ['"Vollkorn SC"', "serif"],
      },
      colors: {
        // Typography
        heading: "#2F5B3C", // deep forest green for H1/H2 (screenshot heading)
        body: "#2E2A27", // near-black/espresso for body text

        // Brand / UI
        primary: {
          DEFAULT: "#A45D3D", // clay / primary button fill (left chip & “Primary button”)
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#334F31", // dark evergreen / secondary button fill
          foreground: "#FFFFFF",
          soft: "#5E7F63", // softer sage (second green chip)
        },
        accent: {
          DEFAULT: "#DB7A3C", // warm rust/orange (third chip)
          clay: "#B46B4A", // outline/border tone from screenshot button
        },

        // Neutrals from the tile
        cream: "#F3E9DA", // light cream (fifth chip)
        paper: "#F1F2EE", // page background tint
        ink: "#2B221D", // espresso (sixth chip)
      },
    },
  },
};
