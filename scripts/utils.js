function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPosition(el) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    bottom: el.offsetParent.offsetHeight - (el.offsetTop + el.offsetHeight),
    right: el.offsetParent.offsetWidth - (el.offsetWidth + el.offsetLeft),
  };
}

function setPosition(el, position){
  el.style.bottom = position.bottom;
  el.style.top = position.top;
  el.style.left = position.left;
  el.style.right = position.right;
}