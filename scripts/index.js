var gameState = {
  started: false,
  error: false,
};

var character = {};
var menu = {};
var error = {};
var success = {};
var keys = [];

function initUI() {
  keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    const val = getRandomInt(2);
    if (val == 1) {
      key.classList.add("alternate");
    }
  });

  document.addEventListener("keydown", handleKeydown);
  character = document.querySelector(".character");
  menu = document.querySelector(".menu");
  success = document.querySelector(".success");
  error = document.querySelector(".error");

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
    keys.forEach((key) => {
      const keychar = key.getAttribute("keychar");
      if (keychar === char) {
        key.classList.add("way");
      }
    });
  });
}

function setCharacterStartPos() {
  const startChar = keyPath[0];
  var startKey;

  keys.forEach((key) => {
    if (key.getAttribute("keychar") === startChar) {
      startKey = key;
    }
  });

  if (!!startKey) {
    setPosition(character, getPosition(startKey));
    character.style.display = "block";
  }
}

handleKeydown = function (evt) {
  evt.preventDefault();

  switch (evt.which) {
    case 13: //enter
      menu.style.display = "none";
      showPath();
      setCharacterStartPos();
      setTimeout(() => {
        var userWay = prompt("Show me the way! (Use CAPS LOCK)");
        for (let charIndex = 0; charIndex < userWay.length; charIndex++) {
          const char = userWay[charIndex];
          if (charIndex > keyPath.length - 1) {
            if (char !== keyPath[charIndex]) {
              gameState.error = true;
              return;
            }
          }
        }
        //moveCharacter
      }, 5000);
      break;
    default:
      break;
  }

  if (gameState.error === true) {
    error.style.display = "block";
  } else {
    success.style.display = "success";
  }
};
