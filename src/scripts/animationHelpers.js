export function scrollReveal() {
  [...document.getElementsByClassName("js--reveal")].map(element => {
    if (!element.classList.contains("is--inactive")) {
      element.classList.add("is--animated");
    }
  });
}

export function containerAnimation(containerToAnimate, containerToRemove) {
  const containerAnimating = document.getElementsByClassName(
    containerToAnimate
  )[0];
  containerAnimating.classList.add("is--animated");
  const containerRemoving = document.getElementsByClassName(
    containerToRemove
  )[0];
  containerRemoving.classList.remove("is--animated");
}
