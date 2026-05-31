(function () {
  "use strict";

  /* =========================
     HELPERS
  ========================= */
  const select = (el, all = false) => {
    el = el.trim();
    return all
      ? [...document.querySelectorAll(el)]
      : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const elements = select(el, all);
    if (!elements) return;

    if (all) {
      elements.forEach(e => e.addEventListener(type, listener));
    } else {
      elements.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /* =========================
     NAVBAR ACTIVE LINK (SCROLL)
  ========================= */
  let navbarlinks = select("#navbar-desktop .scrollto", true);

  const navbarlinksActive = () => {
    let position = window.scrollY + 200;

    navbarlinks.forEach(link => {
      if (!link.hash) return;

      let section = select(link.hash);
      if (!section) return;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /* =========================
     SMOOTH SCROLL
  ========================= */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;

    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth"
    });
  };

  on("click", ".scrollto", function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      let nav = select("#navbar-desktop");
      nav.classList.remove("active");

      let toggle = select(".mobile-nav-toggle");
      if (toggle) {
        toggle.classList.remove("bi-x");
        toggle.classList.add("bi-list");
      }

      scrollto(this.hash);
    }
  }, true);

  /* =========================
     HEADER SCROLL EFFECT
  ========================= */
  let header = select("#header");

  if (header) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /* =========================
     MOBILE NAV TOGGLE
  ========================= */
  on("click", ".mobile-nav-toggle", function () {
    const nav = select("#navbar-desktop");

    nav.classList.toggle("active");

    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /* =========================
     MOBILE DROPDOWN (MEGA MENU)
  ========================= */
  on("click", "#navbar-desktop .dropdown > a", function (e) {
    if (window.innerWidth < 991) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    }
  }, true);

  /* =========================
     BACK TO TOP
  ========================= */
  let backtotop = select(".back-to-top");

  if (backtotop) {
    const toggleBacktotop = () => {
      window.scrollY > 100
        ? backtotop.classList.add("active")
        : backtotop.classList.remove("active");
    };

    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /* =========================
     PRELOADER
  ========================= */
  let preloader = select("#preloader");

  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /* =========================
     HERO CAROUSEL INDICATORS
  ========================= */
  let indicators = select("#hero-carousel-indicators");
  let items = select("#heroCarousel .carousel-item", true);

  if (indicators && items) {
    items.forEach((item, index) => {
      indicators.innerHTML += `<li data-bs-target="#heroCarousel" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}"></li>`;
    });
  }

  /* =========================
     PORTFOLIO (ISOTOPE)
  ========================= */
  window.addEventListener("load", () => {
    let container = select(".portfolio-container");

    if (container) {
      let iso = new Isotope(container, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows"
      });

      let filters = select("#portfolio-flters li", true);

      on("click", "#portfolio-flters li", function (e) {
        e.preventDefault();

        filters.forEach(el => el.classList.remove("filter-active"));
        this.classList.add("filter-active");

        iso.arrange({
          filter: this.getAttribute("data-filter")
        });
      }, true);
    }
  });

  /* =========================
     LIGHTBOX
  ========================= */
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".portfolio-lightbox"
    });
  }

  /* =========================
     TESTIMONIAL SLIDER
  ========================= */
  if (typeof Swiper !== "undefined") {
    new Swiper(".testimonials-slider", {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

})();