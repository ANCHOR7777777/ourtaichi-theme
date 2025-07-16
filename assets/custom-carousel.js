class HeroCarousel extends HTMLElement {
  constructor() {
    super();
    this.container = this.querySelector('.hero-carousel-container');
    this.scroller = this.querySelector('.hero-carousel-scroller');
    this.autoplay = this.dataset.autoplay === 'true';
    this.speed = parseInt(this.dataset.speed, 10) || 40;

    if (!this.scroller) return;

    this.init();
  }

  init() {
    this.duplicateSlides();
    this.setAnimation();
    if (this.autoplay) {
      this.play();
    }
  }

  duplicateSlides() {
    const slides = Array.from(this.scroller.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute('aria-hidden', true);
      this.scroller.appendChild(clone);
    });
  }

  setAnimation() {
    const totalWidth = this.scroller.scrollWidth / 2;
    this.scroller.style.setProperty('--scroll-width', `${totalWidth}px`);
    this.scroller.style.setProperty('--scroll-duration', `${this.speed}s`);
  }

  play() {
    this.scroller.classList.add('playing');
  }

  pause() {
    this.scroller.classList.remove('playing');
  }
}

customElements.define('hero-carousel', HeroCarousel);
