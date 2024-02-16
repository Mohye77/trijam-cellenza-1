var gameState = {
  started: false,
  error: false,
};

var domElements = {
  character: {},
  goldenIdol: {},
  menu: {},
  error: {},
  success: {},
  keys: [],
  keyWay: [],
};
var usercharWay = [];

function initUI() {
  domElements.keys = document.querySelectorAll(".key");
  domElements.keys.forEach((key) => {
    const val = getRandomInt(2);
    if (val == 1) {
      key.classList.add("alternate");
    }
  });

  document.addEventListener("keydown", handleKeydown);
  domElements.character = document.querySelector(".character");
  domElements.goldenIdol = document.querySelector(".goldenIdol");
  domElements.menu = document.querySelector(".menu");
  domElements.success = document.querySelector(".success");
  domElements.error = document.querySelector(".error");

  // initGame()
}

function initGame() {
  var startLeftSide = getRandomInt(2) === 1;
  var startKey = getStartKey(startLeftSide);
  var endKey = getEndKey(startLeftSide);
  initPath(startKey, endKey, startLeftSide);
}

const keyPath = ["A", "Z", "E", "R", "T", "Y"];

function showPath() {
  keyPath.forEach((char) => {
    domElements.keys.forEach((key) => {
      const keychar = key.getAttribute("keychar");
      if (keychar === char) {
        key.classList.add("way");
        domElements.keyWay.push(key);
      }
    });
  });
}

function setCharacterStartPos() {
  const startChar = keyPath[0];
  let startKey;

  domElements.keyWay.forEach((key) => {
    if (key.getAttribute("keychar") === startChar) {
      startKey = key;
    }
  });

  if (!!startKey) {
    setPosition(domElements.character, getPosition(startKey));
    domElements.character.style.display = "block";
  }
}

function setGoldenIdolPos() {
  const endChar = keyPath[keyPath.length - 1];
  let endKey;

  domElements.keyWay.forEach((key) => {
    if (key.getAttribute("keychar") === endChar) {
      endKey = key;
    }
  });

  if (!!endKey) {
    setPosition(domElements.goldenIdol, getPosition(endKey));
    domElements.goldenIdol.style.display = "block";
  }
}

function moveCharacter() {
  for (let charIndex = 0; charIndex < usercharWay.length; charIndex++) {
    const userChar = usercharWay[charIndex];

    domElements.keys.forEach((key) => {
      if (userChar === key.getAttribute("keychar")) {
        console.log(key);
        setPosition(domElements.character, getPosition(key));
        return;
      }
    });
  }
}

handleKeydown = function (evt) {
  switch (evt.which) {
    case 13: //enter
      evt.preventDefault();
      domElements.menu.style.display = "none";
      showPath();
      setCharacterStartPos();
      setGoldenIdolPos();
      setTimeout(() => {
        var userWay = prompt("Show me the way! (Use CAPS LOCK)");
        usercharWay = Array.from(userWay);
        for (let charIndex = 0; charIndex < usercharWay.length; charIndex++) {
          const userChar = usercharWay[charIndex];
          if (charIndex > keyPath.length - 1) {
            if (userChar !== keyPath[charIndex]) {
              gameState.error = true;
              return;
            }
          }
        }
        moveCharacter();

        if (gameState.error === true) {
          domElements.error.style.display = "block";
        } else {
          domElements.success.style.display = "block";
        }
      }, 1000);
      break;
    default:
      break;
  }
};
