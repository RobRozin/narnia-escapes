const CYCLE_MS = 3000;
const MAX_VISIBLE_PHOTOS = 5;

export function PhotoPile(props = {}) {
  const { photos = [], label = "Experience photos" } = props;
  const normalizedPhotos = Array.isArray(photos) ? photos.filter(Boolean) : [];

  return {
    photos: normalizedPhotos,
    label,
    visiblePhotos: normalizedPhotos.map(() => false),
    layers: normalizedPhotos.map(() => 0),
    currentIndex: 0,
    nextIndex: 0,
    layerCounter: 0,
    hasStarted: false,
    isInView: false,
    isPaused: false,
    prefersReducedMotion: false,
    _timer: null,
    _observer: null,
    _visibilityHandler: null,
    _motionQuery: null,
    _motionHandler: null,
    _root: null,

    get hasMultiplePhotos() {
      return this.photos.length > 1;
    },

    get activePhoto() {
      return this.photos[this.currentIndex] || null;
    },

    get advanceLabel() {
      if (!this.hasMultiplePhotos) return this.label;
      const current = this.activePhoto?.alt || this.label;
      return `Show next photo. Currently showing: ${current}`;
    },

    photoStyle(photo, index) {
      const isVisible = this.visiblePhotos[index];
      return {
        zIndex: this.layers[index],
        opacity: isVisible ? 1 : 0,
        transform: `rotate(${photo.rotation || 0}deg)`,
        translate: "-50% -50%",
      };
    },

    frameClass(photo) {
      const base =
        "absolute left-1/2 top-1/2 block rounded-sm bg-[#fffdf8] shadow-[0_18px_45px_rgba(36,37,31,0.28)] ring-1 ring-black/10 will-change-transform";
      const landscape =
        "h-[190px] w-[260px] p-2.5 pb-8 sm:h-[230px] sm:w-[320px] sm:p-3 sm:pb-10 lg:h-[290px] lg:w-[390px] lg:p-3.5 lg:pb-12";
      const portrait =
        "h-[250px] w-[200px] p-2.5 pb-8 sm:h-[310px] sm:w-[248px] sm:p-3 sm:pb-10 lg:h-[390px] lg:w-[312px] lg:p-3.5 lg:pb-12";
      return `${base} ${photo.layout === "landscape" ? landscape : portrait}`;
    },

    mounted(root) {
      if (!this.photos.length) return;
      this._root = root;

      this._motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.prefersReducedMotion = this._motionQuery.matches;
      this._motionHandler = (event) => {
        this.prefersReducedMotion = event.matches;
        if (event.matches) {
          this.showCompletedPile();
        } else {
          this.scheduleNext();
        }
      };
      this._motionQuery.addEventListener?.("change", this._motionHandler);

      this._visibilityHandler = () => {
        if (document.hidden) this.clearTimer();
        else this.scheduleNext();
      };
      document.addEventListener("visibilitychange", this._visibilityHandler);

      if (this.prefersReducedMotion) {
        this.showCompletedPile();
      }

      if (!("IntersectionObserver" in window)) {
        this.isInView = true;
        this.startPile();
        return;
      }

      this._observer = new IntersectionObserver(
        ([entry]) => {
          this.isInView = Boolean(entry?.isIntersecting);
          if (this.isInView) this.startPile();
          else this.clearTimer();
        },
        { threshold: 0.3, rootMargin: "5% 0px 5% 0px" },
      );
      this._observer.observe(this._root);
    },

    unmounted() {
      this.clearTimer();
      this._observer?.disconnect();
      document.removeEventListener("visibilitychange", this._visibilityHandler);
      this._motionQuery?.removeEventListener?.("change", this._motionHandler);
    },

    startPile() {
      if (!this.hasStarted) {
        this.hasStarted = true;
        this.placeNextPhoto();
      }
      this.scheduleNext();
    },

    showCompletedPile() {
      this.clearTimer();
      this.hasStarted = true;
      const visibleCount = Math.min(this.photos.length, MAX_VISIBLE_PHOTOS);
      this.visiblePhotos = this.photos.map((_, index) => index < visibleCount);
      this.layers = this.photos.map((_, index) =>
        index < visibleCount ? index + 1 : 0,
      );
      this.layerCounter = visibleCount;
      this.currentIndex = Math.max(0, visibleCount - 1);
      this.nextIndex = visibleCount % this.photos.length;
    },

    placeNextPhoto({ animate = true } = {}) {
      if (!this.photos.length) return;

      const index = this.nextIndex;
      const nextVisible = this.visiblePhotos.slice();
      const nextLayers = this.layers.slice();

      if (!nextVisible[index]) {
        const visibleByLayer = nextLayers
          .map((layer, photoIndex) => ({ layer, photoIndex }))
          .filter((item) => nextVisible[item.photoIndex])
          .sort((a, b) => a.layer - b.layer);
        if (visibleByLayer.length >= MAX_VISIBLE_PHOTOS) {
          const bottomPhoto = visibleByLayer[0].photoIndex;
          nextVisible[bottomPhoto] = false;
          nextLayers[bottomPhoto] = 0;
        }
      }

      nextVisible[index] = true;
      nextLayers[index] = ++this.layerCounter;

      this.visiblePhotos = nextVisible;
      this.layers = nextLayers;
      this.currentIndex = index;
      this.nextIndex = (index + 1) % this.photos.length;

      if (this.nextIndex === 0) this.normalizeLayers();
      if (animate && !this.prefersReducedMotion) this.animatePlacement(index);
    },

    normalizeLayers() {
      const ordered = this.layers
        .map((layer, index) => ({ layer, index }))
        .filter((item) => this.visiblePhotos[item.index])
        .sort((a, b) => a.layer - b.layer);
      const normalized = this.layers.map(() => 0);
      ordered.forEach((item, position) => {
        normalized[item.index] = position + 1;
      });
      this.layers = normalized;
      this.layerCounter = ordered.length;
    },

    animatePlacement(index) {
      window.requestAnimationFrame(() => {
        const frame = this._root?.querySelector(`[data-photo-index="${index}"]`);
        const photo = this.photos[index];
        if (!frame || !photo) return;
        const rotation = Number(photo.rotation) || 0;
        const entryX = rotation < 0 ? -28 : 28;
        frame.getAnimations?.().forEach((animation) => animation.cancel());
        frame.animate(
          [
            {
              opacity: 0,
              transform: `translate3d(${entryX}px, -46px, 0) rotate(${rotation * 0.45}deg) scale(1.045)`,
            },
            {
              opacity: 1,
              transform: `translate3d(0, 0, 0) rotate(${rotation}deg) scale(1)`,
            },
          ],
          {
            duration: 650,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          },
        );
      });
    },

    clearTimer() {
      if (this._timer) {
        window.clearTimeout(this._timer);
        this._timer = null;
      }
    },

    scheduleNext() {
      this.clearTimer();
      if (
        !this.hasMultiplePhotos ||
        !this.hasStarted ||
        !this.isInView ||
        this.isPaused ||
        this.prefersReducedMotion ||
        document.hidden
      ) {
        return;
      }
      this._timer = window.setTimeout(() => {
        this.placeNextPhoto();
        this.scheduleNext();
      }, CYCLE_MS);
    },

    advance() {
      if (!this.hasMultiplePhotos) return;
      this.placeNextPhoto();
      this.scheduleNext();
    },

    togglePause() {
      this.isPaused = !this.isPaused;
      if (this.isPaused) this.clearTimer();
      else this.scheduleNext();
    },

    /*html*/
    $template: `
      <div
        class="relative mx-auto h-[300px] w-full max-w-[330px] sm:h-[360px] sm:max-w-[390px] lg:h-[470px] lg:max-w-[470px]"
        role="region"
        aria-roledescription="carousel"
        :aria-label="label"
        @vue:mounted="mounted($el)"
        @vue:unmounted="unmounted"
      >
        <div
          class="group absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 rounded-3xl"
          :class="hasMultiplePhotos ? 'cursor-pointer' : 'cursor-default'"
          :role="hasMultiplePhotos ? 'button' : null"
          :tabindex="hasMultiplePhotos ? '0' : null"
          :aria-label="hasMultiplePhotos ? advanceLabel : null"
          @click="advance"
          @keydown.enter.prevent="advance"
          @keydown.space.prevent="advance"
        >
          <span
            v-for="(photo, index) in photos"
            :key="photo.src"
            :data-photo-index="index"
            :class="frameClass(photo)"
            :style="photoStyle(photo, index)"
            :aria-hidden="currentIndex === index ? 'false' : 'true'"
          >
            <img
              :src="photo.src"
              :alt="currentIndex === index ? photo.alt : ''"
              class="h-full w-full rounded-[2px] object-cover bg-neutral-200"
              :style="{ objectPosition: photo.position || 'center' }"
              loading="lazy"
              decoding="async"
            />
          </span>
        </div>

        <button
          v-if="hasMultiplePhotos"
          type="button"
          class="absolute bottom-1 right-2 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md ring-1 ring-black/10 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:bottom-2 sm:right-5 lg:bottom-5 lg:right-8"
          :aria-label="isPaused ? 'Resume photo carousel' : 'Pause photo carousel'"
          :aria-pressed="isPaused ? 'true' : 'false'"
          @click="togglePause"
        >
          <svg v-if="!isPaused" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
          </svg>
          <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    `,
  };
}
