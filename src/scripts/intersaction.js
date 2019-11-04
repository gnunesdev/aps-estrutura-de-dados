export default {
  init() {
    scrollReveal();
  }
};

function scrollReveal() {
  [...document.getElementsByClassName("js--reveal")].map(element => {
    if (!element.classList.contains("is--inactive")) {
      element.classList.add("is--animated");
    }
  });
}
