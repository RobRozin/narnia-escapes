import { bookingLinks } from "../data/site-content.js";

function getConfiguredBookingLink(id) {
  const href = (bookingLinks[id] || "").trim();
  return /^https?:\/\//i.test(href) ? href : null;
}

export function createBookingLinksFeature() {
  return {
    bookingLinks,
    isBookingLinkConfigured(id) {
      return Boolean(getConfiguredBookingLink(id));
    },
    getBookingHref(id) {
      return getConfiguredBookingLink(id) || "#contact";
    },
    getBookingTarget(id) {
      return getConfiguredBookingLink(id) ? "_blank" : null;
    },
    getBookingRel(id) {
      return getConfiguredBookingLink(id) ? "noopener noreferrer" : null;
    },
    prepareBooking(id) {
      if (!this.isBookingLinkConfigured(id)) {
        this.updateContactMessage?.(id);
      }
    },
  };
}
