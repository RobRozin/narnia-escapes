async function loadPartial(elId, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const html = await res.text();

  const el = document.getElementById(elId);
  if (!el) {
    console.warn(`[loadPartial] target #${elId} not found when loading ${url}`);
    return; // or throw new Error(...) if you prefer failing fast
  }
  el.innerHTML = html;
}

const app = {
  pages: ["home", "retreats", "sauna", "events", "about"],
  activePage: "home",
  isScrolled: false,
  isMobileMenuOpen: false,
  isCollapsed: false,
  isHidden: false,
  _lastY: 0,
  isModalVisible: false,
  templateMessage: encodeURIComponent(
    "Hello! I'm interested in booking a consultation. Could you please share more information?"
  ),
  services: [
    {
      id: 1,
      accent: "One",
      title: "Complimentary Diagnostics",
      details:
        "Start with a free mini-diagnostic to assess your skin, explain how I can help, and review consultation plans & costs.",
    },
    {
      id: 2,
      accent: "Two",
      title: "Comprehensive Consultation",
      details:
        "In-depth session to analyze your skin type, review your current routine, select the right products, and craft your personalized plan.",
    },
    {
      id: 3,
      accent: "Three",
      title: "Ongoing Support",
      details:
        "Get follow-up support: 5 days included with consultation and an optional 2 months with the option to extend as needed.",
    },
  ],
  contactOptions: [
    {
      id: "telegram",
      label: "Send Message on Telegram",
      href: "https://t.me/irenasmirnowa?text=",
      appendMessage: true,
      color: "#26A5E4",
      note: "Fast",
    },
    {
      id: "instagram",
      label: "Send Message on Instagram",
      href: "https://instagram.com/natur_esthetics",
      appendMessage: false,
      color: "#FF0069",
      note: null,
    },
    {
      id: "whatsapp",
      label: "Message Me on WhatsApp",
      href: "https://wa.me/12154212775",
      appendMessage: true,
      color: "#25D366",
      note: null,
    },
  ],

  contactHref(opt) {
    return opt.appendMessage ? opt.href + this.templateMessage : opt.href;
  },
  openService: null,
  isScrolled: false,

  // Hero Section Image Animation
  heroImages: [
    { src: "./images/about/hero_about_3.jpg", alt: "Irina 3", show: false },
    { src: "./images/about/hero_about_2.jpg", alt: "Irina 2", show: false },
    { src: "./images/about/hero_about_1.jpg", alt: "Irina 1", show: false },
  ],

  instaPosts: ["first", "second", "third"],

  init() {
    this._lastY = window.scrollY || 0;
    this.checkScroll();
    window.addEventListener("scroll", this.checkScroll, { passive: true });

    const initialPage = window.location.hash.replace("#", "");
    if (initialPage) this.navigateTo(initialPage, false); // Don't push state for initial load
  },

  navigateTo(pageId, pushState = true) {
    if (pushState) {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
    this.activePage = pageId;
    this.isMobileMenuOpen = false;

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger hero image animations if on the About page
    if (pageId === "about") {
      this.animateHeroImages();
    }
  },

  checkScroll() {
    const y = window.scrollY || 0;
    const dy = y - this._lastY;

    // your existing color toggle
    this.isScrolled = y > 80;

    // collapse threshold (shrink once you’ve moved a bit)
    const COLLAPSE_AT = 24;
    if (y > COLLAPSE_AT && !this.isCollapsed) this.isCollapsed = true;
    if (y <= COLLAPSE_AT && this.isCollapsed) this.isCollapsed = false;

    // hide on downscroll, show on upscroll
    if (dy > 4 && y > COLLAPSE_AT && !this.isHidden) this.isHidden = true;
    else if (dy < -6 && this.isHidden) this.isHidden = false;

    // at very top, always show
    if (y <= 0) this.isHidden = false;

    this._lastY = y;
  },

  // Hero Image Animation Logic
  animateHeroImages() {
    // Reset all images to hidden
    this.heroImages.forEach((image) => (image.show = false));

    // Trigger fade-in animations with a delay
    this.heroImages.forEach((image, index) => {
      setTimeout(() => {
        image.show = true;
      }, index * 500); // Delay each image by 500ms
    });
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("mounted");
  PetiteVue.createApp(app).mount("#app");

  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       app.checkScroll();
  //     },
  //     { passive: true }
  //   );
});
