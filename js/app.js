// app.js
import { AboutSection } from "./components/AboutSection.js";
import { Button } from "./components/Button.js";
import { ContactSection } from "./components/ContactSection.js";
import { EventsSection } from "./components/EventsSection.js";
import { FooterSection } from "./components/FooterSection.js";
import { HeroSection } from "./components/HeroSection.js";
import { HighlightCard } from "./components/HighlightCard.js";
import { HighlightsSection } from "./components/HighlightsSection.js";
import { Navbar } from "./components/Navbar.js";
import { RetreatsSection } from "./components/RetreatsSection.js";
import { SaunaSection } from "./components/SaunaSection.js";

const app = {
  // ======= State =======
  isScrolled: false,
  isMobileMenuOpen: false,
  isContactMenuOpen: false,
  navItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "retreats", label: "Retreats", href: "#retreats" },
    { id: "sauna", label: "Sauna", href: "#sauna" },
    { id: "events", label: "Events", href: "#events" },
    { id: "about", label: "About", href: "#about" },
  ],
  highlights: [
    {
      id: "retreats",
      href: "#retreats",
      imgSrc: "./images/highlights-retreats.jpeg",
      imgAlt: "Guided retreats at the cabin",
      title: "Guided Retreats",
      text: "Breathwork - Sound bath - Sauna & cold plunge - Hikes - Homemade meals",
    },
    {
      id: "sauna",
      href: "#sauna",
      imgSrc: "./images/highlights-sauna.jpeg",
      imgAlt: "Sauna experience with cold plunge",
      title: "Sauna Experience",
      text: "Wood-fired sauna - Cold plunge - Chill room - Herbal tea - Pondside relaxation",
    },
    {
      id: "events",
      href: "#events",
      imgSrc: "./images/highlights-events.jpg",
      imgAlt: "Private event with nature views",
      title: "Private Events",
      text: "Workshops, celebrations, or team resets - Custom session flow - Optional sound bathing & breathwork",
    },
  ],
  retreatExperience: [
    "Wim Hof Method: breathwork, cold exposure, mindfulness",
    "Daily sauna ritual with cold plunge",
    "Guided sound baths & vibration therapy",
    "Qi Gong, hikes, stretching & interoceptive practices",
    "Community connection & evening wind-down",
    "Select dates: guest instructors (ecstatic dance, yoga, Thai massage)",
  ],
  retreatLodging: [
    "Shared loft with 8 single beds",
    "3 full bathrooms with showers",
    "Full kitchen & Wi-Fi",
    "Wood stove heating",
  ],
  retreatMeals: [
    "Grain/avocado bowls",
    "Hearty soups",
    "Pilaf (lamb/beef/chicken)",
    "Vegetable stew",
    '"Secret" fish dish',
    "Fire-cooked meals in a kazan (select nights)",
    "Vegetarian on request",
  ],
  saunaIncluded: ["Aromatherapy", "Tea service", "Mineral water"],
  saunaAddOns: [
    { label: "Platza (Venik) Massage", price: "$40" },
    { label: "Breathwork + Sound Baths", price: "$40" },
    { label: "Ice Bath", price: "$40", note: "(summer only)" },
    { label: "Soup + Salad", price: "$20" },
  ],
  eventHighlightsLeft: [
    "Add the Narnia vibe to any workshop or private event",
    "Accommodations available with homemade meals",
  ],
  eventHighlightsRight: [
    "Optional experiences: breathwork, cold exposure & sauna",
    "Need more room or private suites? Local Airbnb partners available",
  ],
  contactMethods: [
    {
      id: "instagram",
      label: "Send on Instagram",
      brandColor: "#E1306C",
      brandText: "#FFFFFF",
      iconPath:
        "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a5 5 0 100 10 5 5 0 000-10zm5-.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
    },
    {
      id: "messenger",
      label: "Send on Messenger",
      brandColor: "#0084FF",
      brandText: "#FFFFFF",
      iconPath:
        "M12 2C6.5 2 2 6 2 11.5c0 2.9 1.4 5.5 3.7 7.2V22l3.3-1.8c.9.2 1.8.3 2.8.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm.1 13.7l-2.9-3.1-5.1 3.1 5.6-6.1 2.9 3.1 5.1-3.1-5.6 6.1z",
    },
    {
      id: "telegram",
      label: "Send on Telegram",
      brandColor: "#2AABEE",
      brandText: "#FFFFFF",
      iconPath:
        "M21.5 3.3l-19 7.3c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 11.5-7.7c.6-.4 1.2-.2.7.3l-9.3 8.8-.3 4c.5 0 .7-.2 1-.5l2.4-2.3 5 3.6c.9.5 1.6.2 1.8-.8l3.3-15.3c.3-1.5-.6-2.1-1.8-1.5z",
    },
    {
      id: "email",
      label: "Send Email",
      brandColor: "#706E49",
      brandText: "#FFFFFF",
      iconPath:
        "M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 5 8-5H4zm0 2.2v9.8h16V8.2l-8 5-8-5z",
    },
  ],
  footerLinks: [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/narniaescapes",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://facebook.com/narniaescapes",
    },
  ],

  // ======= Components =======
  AboutSection,
  Button,
  ContactSection,
  EventsSection,
  FooterSection,
  HeroSection,
  HighlightCard,
  HighlightsSection,
  Navbar,
  RetreatsSection,
  SaunaSection,

  // Contact message
  contactMessage:
    "Hi! I'm interested in experiencing Narnia Escapes. Could you share details on your sessions and availability?",
  contactTemplates: {
    retreat:
      "Hello! I'm interested in joining one of your upcoming retreats. Could you share more details about locations, pricing, and available dates?",
    sauna:
      "Hi! I'd like to learn more about your sauna sessions. Could you share the schedule, pricing, and whether private bookings are available?",
    event:
      "Hello! I'm interested in hosting a private event. Could you tell me more about available venues, packages, and capacity limits?",
  },
  updateContactMessage(id) {
    const message = this.contactTemplates[id];
    if (message) {
      this.contactMessage = message;
    } else {
      console.warn(`[updateContactMessage] Unknown id: ${id}`);
    }
  },

  fired: false,

  // ======= Helpers =======
  _encodeMsg(text) {
    return encodeURIComponent((text || "").trim());
  },

  // ======= Contact actions =======
  openInstagram() {
    // Always fall back to web browser if the IG app isn't installed
    const appLink = `instagram://user?username=narniaescapes`;
    const webLink = `https://instagram.com/narniaescapes`;

    // Try open the app first
    window.location.href = appLink;

    // Fallback to web
    setTimeout(() => {
      window.open(webLink, "blank");
    }, 500);
  },
  openMessenger() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(`https://m.me/narniaescapes?text=${msg}`, "blank");
  },
  openTelegram() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(`https://t.me/mouzerG?text=${msg}`, "blank");
  },
  openEmail() {
    const msg = this._encodeMsg(this.contactMessage);
    window.open(
      `mailto:narniaescapes22@gmail.com?subject=Narnia%20Inquiry&body=${msg}`,
      "blank",
    );
  },
  handleContact(methodId) {
    switch (methodId) {
      case "instagram":
        this.openInstagram();
        break;
      case "messenger":
        this.openMessenger();
        break;
      case "telegram":
        this.openTelegram();
        break;
      case "email":
        this.openEmail();
        break;
      default:
        console.warn(`[handleContact] Unknown method: ${methodId}`);
    }
    this.isContactMenuOpen = false;
  },
  toggleContactMenu() {
    this.isContactMenuOpen = !this.isContactMenuOpen;
  },

  _isMobile() {
    return window.matchMedia("(max-width: 1023.98px)").matches;
  },

  /* =========================
     In-view Parallax (Depth)
     ========================= */
  _parallax: {
    enabled: false,
    prefersReduced: false,
    sections: [], // [{ el, front, back, inView }]
    io: null,
    rafId: null,
    frontMax: 150,
    backMax: 50,
  },

  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  },
  _clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  },
  _progress(rect, vh) {
    const p = (vh - rect.top) / (vh + rect.height);
    return this._clamp(p, 0, 1);
  },

  initParallax() {
    this._parallax.prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (this._parallax.prefersReduced) return;

    const nodes = document.querySelectorAll(".js-parallax-section");
    if (!nodes.length) return;

    this._parallax.enabled = true;
    this._parallax.sections = Array.from(nodes).map((el) => {
      const front =
        el.querySelector('[data-parallax="front"] > *') ||
        el.querySelector('[data-parallax="front"]');
      const back =
        el.querySelector('[data-parallax="back"] > *') ||
        el.querySelector('[data-parallax="back"]');
      if (front) front.style.willChange = "transform";
      if (back) back.style.willChange = "transform";
      return { el, front, back, inView: false };
    });

    if (!this._parallax.sections.some((s) => s.front && s.back)) return;

    this._parallax.io = new IntersectionObserver(
      (entries) => {
        let anyInView = false;
        for (const entry of entries) {
          const sec = this._parallax.sections.find(
            (s) => s.el === entry.target,
          );
          if (sec) {
            sec.inView = entry.isIntersecting;
            if (sec.inView) anyInView = true;
          }
        }
        if (anyInView) this.startParallax();
        else if (!this._parallax.sections.some((s) => s.inView))
          this.stopParallax();
      },
      { root: null, rootMargin: "10% 0px 10% 0px", threshold: [0, 1] },
    );

    this._parallax.sections.forEach((s) => {
      this.updateParallaxSection(s);
      this._parallax.io.observe(s.el);
    });

    window.addEventListener("resize", this.updateParallaxAll, {
      passive: true,
    });
  },

  destroyParallax() {
    if (!this._parallax.enabled) return;
    this.stopParallax();
    if (this._parallax.io) this._parallax.io.disconnect();
    window.removeEventListener("resize", this.updateParallaxAll);
    this._parallax.sections.forEach((s) => {
      if (s.front) {
        s.front.style.transform = "";
        s.front.style.willChange = "";
      }
      if (s.back) {
        s.back.style.transform = "";
        s.back.style.willChange = "";
      }
    });
    this._parallax.sections = [];
    this._parallax.enabled = false;
  },

  updateParallaxSection(sec) {
    if (!sec.front || !sec.back) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const rect = sec.el.getBoundingClientRect();
    const eased = this.easeOutCubic(this._progress(rect, vh));

    const frontY = (1 - eased) * this._parallax.frontMax;
    const backY = (1 - eased) * this._parallax.backMax;

    sec.front.style.transform = `translate3d(0, ${frontY}px, 0)`;
    sec.back.style.transform = `translate3d(0, ${backY}px, 0)`;
  },

  updateParallaxAll: null,

  startParallax() {
    if (this._parallax.rafId) return;
    const tick = () => {
      for (const s of this._parallax.sections) {
        if (s.inView) this.updateParallaxSection(s);
      }
      this._parallax.rafId = requestAnimationFrame(tick);
    };
    this._parallax.rafId = requestAnimationFrame(tick);
  },

  stopParallax() {
    if (this._parallax.rafId) {
      cancelAnimationFrame(this._parallax.rafId);
      this._parallax.rafId = null;
    }
  },

  mounted() {
    this.checkScroll();
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onScroll);

    this._parallax.frontMax = this._isMobile() ? 50 : 150;
    this._parallax.backMax = this._isMobile() ? -20 : 10;

    // Parallax
    this.updateParallaxAll = () => {
      if (!this._parallax.enabled) return;
      for (const s of this._parallax.sections) this.updateParallaxSection(s);
    };
    this.initParallax();

    const initialPage = window.location.hash.replace("#", "");
    if (initialPage) this.navigateTo(initialPage, false);
  },

  unmounted() {
    window.removeEventListener("scroll", this.onScroll, { passive: true });
    window.removeEventListener("resize", this.onScroll);
    this.destroyParallax();
  },

  navigateTo(pageId, pushState = true) {
    if (pushState) {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
    // this.activePage = pageId;
    this.isMobileMenuOpen = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  triggerHighlights() {
    if (this.fired) return;
    const container = document.getElementById("highlights-container");
    if (!container) return;

    const top = container.getBoundingClientRect().top;
    if (top <= 600) {
      this.fired = true;
      const cards = container.querySelectorAll(".card");
      cards.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-fade-in-up");
          el.addEventListener(
            "animationend",
            () => el.classList.remove("opacity-0"),
            { once: true },
          );
        }, i * 20);
      });
    }
  },

  checkScroll() {
    const y = window.scrollY || 0;
    this.isScrolled = y > 300;
  },

  onScroll() {
    window.requestAnimationFrame(() => {
      this.checkScroll();
      this.triggerHighlights();
      // Parallax uses RAF for in-view updates.
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  PetiteVue.createApp(app).mount("#app");
});
