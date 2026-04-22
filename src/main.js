import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Pricing } from "./components/pricing";
import { CTA } from "./components/cta";
import { Footer } from "./components/footer";

AOS.init();

document.getElementById("navbar").innerHTML = Navbar();

document.getElementById("main-content").innerHTML = `
  ${Hero()},
  ${Services()},
  ${Gallery()},
  ${Pricing()},
  ${CTA()},
`;

document.getElementById("footer").innerHTML = Footer();

const nav = document.querySelector(".custom-navbar");

const handleScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
};

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});
