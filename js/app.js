import { AboutSection } from "./components/07-AboutSection.js";
import { Button } from "./components/Button.js";
import { ContactSection } from "./components/08-ContactSection.js";
import { EventsSection } from "./components/06-EventsSection.js";
import { FooterSection } from "./components/09-FooterSection.js";
import { HeroSection } from "./components/02-HeroSection.js";
import { HighlightCard } from "./components/HighlightCard.js";
import { HighlightsSection } from "./components/03-HighlightsSection.js";
import { InfoToggle } from "./components/InfoToggle.js";
import { Navbar } from "./components/01-Navbar.js";
import { NewsletterModal } from "./components/10-NewsletterModal.js";
import { RetreatsSection } from "./components/04-RetreatsSection.js";
import { SaunaSection } from "./components/05-SaunaSection.js";
import {
  eventHighlightsLeft,
  eventHighlightsRight,
  footerLinks,
  highlights,
  navItems,
  retreatExperience,
  retreatLodging,
  retreatMeals,
  saunaAddOns,
  saunaIncluded,
} from "./data/site-content.js";
import { createContactActionsFeature } from "./features/contact-actions.js";
import { createNewsletterFeature } from "./features/newsletter.js";
import { createParallaxFeature } from "./features/parallax.js";
import { createScrollEffectsFeature } from "./features/scroll-effects.js";
import { createServiceDetailsFeature } from "./features/service-details.js";

const components = {
  AboutSection,
  Button,
  ContactSection,
  EventsSection,
  FooterSection,
  HeroSection,
  HighlightCard,
  HighlightsSection,
  InfoToggle,
  Navbar,
  NewsletterModal,
  RetreatsSection,
  SaunaSection,
};

function createApp() {
  return {
    ...components,
    ...createServiceDetailsFeature(),
    ...createContactActionsFeature(),
    ...createNewsletterFeature(),
    ...createParallaxFeature(),
    ...createScrollEffectsFeature(),

    navItems,
    highlights,
    retreatExperience,
    retreatLodging,
    retreatMeals,
    saunaIncluded,
    saunaAddOns,
    eventHighlightsLeft,
    eventHighlightsRight,
    footerLinks,

    isMobileMenuOpen: false,
    _handleResize: null,

    _isMobile() {
      return window.matchMedia("(max-width: 1023.98px)").matches;
    },

    mounted() {
      this.checkScroll();
      window.addEventListener("scroll", this.onScroll, { passive: true });

      this._handleResize = () => {
        this.syncResponsiveState();
        this.onScroll();
        this.updateParallaxAll?.();
      };
      window.addEventListener("resize", this._handleResize);

      this.syncResponsiveState();
      this._parallax.frontMax = this._isMobile() ? 50 : 150;
      this._parallax.backMax = this._isMobile() ? -20 : 10;

      this.updateParallaxAll = () => {
        if (!this._parallax.enabled) return;
        for (const section of this._parallax.sections) {
          this.updateParallaxSection(section);
        }
      };

      this.initParallax();
      this.initNewsletter();

      const initialPage = window.location.hash.replace("#", "");
      if (initialPage) this.navigateTo(initialPage, false);
    },

    unmounted() {
      window.removeEventListener("scroll", this.onScroll, { passive: true });
      if (this._handleResize) {
        window.removeEventListener("resize", this._handleResize);
      }
      this.destroyNewsletter();
      this.destroyParallax();
    },

    navigateTo(pageId, pushState = true) {
      if (pushState) {
        history.pushState({ page: pageId }, "", "#" + pageId);
      }
      this.isMobileMenuOpen = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  };
}

document.addEventListener("DOMContentLoaded", () => {
  PetiteVue.createApp(createApp()).mount("#app");
});
