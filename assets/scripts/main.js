// burger
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const headerLinks = document.querySelector('.header_link');
  const body = document.body;

  if (burger && headerLinks) {
    const toggleHeaderMenu = () => {
      const isOpen = headerLinks.classList.toggle('active');
      burger.classList.toggle('active', isOpen);
      body.classList.toggle('menu-open', isOpen);
    };

    burger.addEventListener('click', toggleHeaderMenu);

    headerLinks.addEventListener('click', (event) => {
      if (event.target.closest('a') && headerLinks.classList.contains('active')) {
        headerLinks.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
});
// burger

// faq
document.querySelectorAll(".modules_header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    item.classList.toggle("active");

    const body = item.querySelector(".modules_body");

    if (item.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  });
});
// faq

let swiper = new Swiper(".swiperResults", {
  slidesPerView: 1.1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
    993: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 3.4,
    },
  },
});

let swiper2 = new Swiper(".swiperVideo", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".video_next",
    prevEl: ".video_prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.1,
    },
    993: {
      slidesPerView: 1.2,
    },
    1200: {
      slidesPerView: 1.3,
    },
  },
});
