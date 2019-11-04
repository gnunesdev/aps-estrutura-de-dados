import intersaction from "./intersaction.js";
import order from "./order.js";

const init = () => {
  intersaction.init();
  order.init();
};

document.addEventListener("DOMContentLoaded", init);
