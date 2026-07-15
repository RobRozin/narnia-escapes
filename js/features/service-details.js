export function createServiceDetailsFeature() {
  return {
    isDesktopViewport: false,
    isRetreatDetailsOpen: false,
    isSaunaDetailsOpen: false,
    isEventsDetailsOpen: false,
    openServiceDetails(id) {
      const isRetreat = id === "retreat";
      const isSauna = id === "sauna";
      const isEvents = id === "events";

      const isOpen =
        (isRetreat && this.isRetreatDetailsOpen) ||
        (isSauna && this.isSaunaDetailsOpen) ||
        (isEvents && this.isEventsDetailsOpen);

      const targetId = isRetreat ? "retreats" : isSauna ? "sauna" : "events";
      const anchorEl = document.getElementById(targetId);
      const anchorTopBefore = anchorEl
        ? anchorEl.getBoundingClientRect().top
        : null;

      this.isRetreatDetailsOpen = isRetreat ? !isOpen : false;
      this.isSaunaDetailsOpen = isSauna ? !isOpen : false;
      this.isEventsDetailsOpen = isEvents ? !isOpen : false;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (!anchorEl || anchorTopBefore === null) return;
          const anchorTopAfter = anchorEl.getBoundingClientRect().top;
          const delta = anchorTopAfter - anchorTopBefore;
          if (Math.abs(delta) > 1) {
            window.scrollBy({ top: delta, behavior: "auto" });
          }
        });
      });
    },
    isServiceDetailsVisible(id) {
      if (id === "retreat") return this.isRetreatDetailsOpen;
      if (id === "sauna") return this.isSaunaDetailsOpen;
      if (id === "events") return this.isEventsDetailsOpen;
      return false;
    },
    syncResponsiveState() {
      this.isDesktopViewport = !this._isMobile();
    },
  };
}
