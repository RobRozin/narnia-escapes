module.exports = {
  content: [
    "./index.html",
    "./waiver/index.html",
    "./js/**/*.js",
    "!./js/components/10-NewsletterModal.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
        heading: ['"Cormorant Garamond"', "serif"],
        accent: ['"Vollkorn SC"', "serif"],
        display: ['"Cinzel"', "serif"],
      },
      colors: {
        ink: "#2D2D2D",
        heading: "#2D2D2D",
        body: "#2D2D2D",
        muted: "#6B6052",
        primary: {
          DEFAULT: "#AA5331",
          foreground: "#F8F4EB",
          hover: "#934426",
        },
        secondary: {
          DEFAULT: "#727145",
          foreground: "#F8F4EB",
          hover: "#62613A",
        },
        evergreen: "#727145",
        charcoal: "#2D2D2D",
        smoke: "#2D2D2D",
        accent: {
          DEFAULT: "#A07F56",
          soft: "#BCB2A6",
        },
        offwhite: "#F8F4EB",
        ballet: "#EDE3DA",
        ash: "#BCB2A6",
        bronze: "#A07F56",
        marmalade: "#C4784B",
        tan: "#817F56",
        background: {
          DEFAULT: "#F8F4EB",
          section: "#EDE3DA",
          card: "#F8F4EB",
          footer: "#2D2D2D",
          overlay: "#2D2D2D",
        },
        text: {
          DEFAULT: "#2D2D2D",
          light: "#6B6052",
          inverse: "#F8F4EB",
          strong: "#2D2D2D",
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
