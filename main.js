// import './62356a80-7513-4ae2-96de-39204aad7745.js';
import "./style.css";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded")
})

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
});

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw4.js')
//       .then(function(registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(function(error) {
//         console.error('Service Worker registration failed:', error);
//       });
// }

