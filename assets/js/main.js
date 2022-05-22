"use-strick";

// PRELOADER;
let loader = document.querySelector(".preloader");
window.onload = function () {
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.classList.add("remove__loader");
  }, 1000);
};
/* SHOWING MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

//  REMEVING MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =========Hamburger =================/////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//  REMOVING MENU while scrolling
window.onscroll = function () {
  navMenu.classList.remove("show-menu");
  hamburger.classList.remove("active");
};

//  SCROLL SECTIONS ACTIVE LINK
const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//  CHANGE BACKGROUND HEADER
function scrollHeader() {
  const home = document.getElementById("home");

  if (this.scrollY >= home.offsetHeight) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

//  SHOW scroll top
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);

//MIXITUP FILTER PORTFOLIO
const mixer = mixitup(".portfolio__container", {
  selectors: {
    target: ".portfolio__content",
  },

  animation: {
    duration: 250,
    nudge: false,
    reverseOut: false,
    effects: "fade scale(0.08)",
  },
});

// link active portfolio

const linkPortfolio = document.querySelectorAll(".portfolio__item");

function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove("active-portfolio"));
    this.classList.add("active-portfolio");
  }
}

linkPortfolio.forEach((l) => l.addEventListener("click", activePortfolio));

// SWIPER CAROUSEL
const swiper = new Swiper(".testimonial__container", {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// GSAP animation
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(".home__data", { opacity: 0, duration: 2, delay: 0.8, y: 25 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 2,
  delay: 1.8,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".home__social-icon", {
  opacity: 0,
  duration: 2,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.2,
});
