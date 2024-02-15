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
  el.bottom = position.bottom;
  el.top = position.top;
  el.left = position.left;
  el.right = position.right;
}