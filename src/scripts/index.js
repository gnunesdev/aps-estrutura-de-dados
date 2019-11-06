import { scrollReveal } from "./animationHelpers.js";
import order from "./order.js";

const init = () => {
  scrollReveal();
  order.init();
};

document.addEventListener("DOMContentLoaded", init);
