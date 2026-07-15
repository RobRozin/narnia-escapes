import {
  contactMethods,
  contactTemplates,
  defaultContactMessage,
} from "../data/site-content.js";

export function createContactActionsFeature() {
  return {
    activeContactMenuId: null,
    contactMethods,
    contactMessage: defaultContactMessage,
    contactTemplates,
    _encodeMsg(text) {
      return encodeURIComponent((text || "").trim());
    },
    updateContactMessage(id) {
      const message = this.contactTemplates[id];
      if (message) {
        this.contactMessage = message;
      } else {
        console.warn(`[updateContactMessage] Unknown id: ${id}`);
      }
    },
    resetContactMessage() {
      this.contactMessage = defaultContactMessage;
    },
    isContactMenuOpen(menuId) {
      return this.activeContactMenuId === menuId;
    },
    toggleContactMenu(menuId, contextId = null) {
      if (this.activeContactMenuId === menuId) {
        this.activeContactMenuId = null;
        return;
      }

      if (contextId) this.updateContactMessage(contextId);
      else this.resetContactMessage();
      this.activeContactMenuId = menuId;
    },
    closeContactMenu(menuId = null) {
      if (!menuId || this.activeContactMenuId === menuId) {
        this.activeContactMenuId = null;
      }
    },
    openInstagram() {
      const appLink = `instagram://user?username=narniaescapes`;
      const webLink = `https://instagram.com/narniaescapes`;

      window.location.href = appLink;

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
      this.activeContactMenuId = null;
    },
  };
}
