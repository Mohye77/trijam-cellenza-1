var gameState = {
  started: false,
  error: false,
};

var domElements = {
  character: {},
  goldenIdol: {},
  greenbush: {},
  redbush: {},
  menu: {},
  error: {},
  success: {},
  keys: [],
  keyWay: [],
};
var usercharWay = [];

function initUI() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    const val = getRandomInt(2);
    if (val == 1) {
      key.classList.add("alternate");
    }
    domElements.keys.push(key);
  });

  document.addEventListener("keydown", handleKeydown);
  domElements.character = document.querySelector(".character");
  domElements.goldenIdol = document.querySelector(".goldenIdol");
  domElements.menu = document.querySelector(".menu");
  domElements.success = document.querySelector(".success");
  domElements.error = document.querySelector(".error");
  domElements.greenbush = document.querySelector(".obstacle.greenbush");
  domElements.redbush = document.querySelector(".obstacle.redbush");

  initGame();
}

function initGame() {
  // var startLeftSide = getRandomInt(2) === 1;
  // var startKey = getStartKey(startLeftSide);
  // var endKey = getEndKey(startLeftSide);
  // initPath(startKey, endKey, startLeftSide);
  initTempPath();
}

function initTempPath() {
  var val = getRandomInt(3);
  keyPath = keyPaths[val];
}

const keyPaths = [
  ["1", "A", "Q", "W", "X", "C", "V", "B", "N", "?", ".", "/", "§"],
  [
    "A",
    "Z",
    "S",
    "X",
    "C",
    "V",
    "B",
    "H",
    "Y",
    "6",
    "7",
    "8",
    "9",
    "O",
    "L",
    "/",
    "§",
  ],
  [
    "1",
    "A",
    "Z",
    "3",
    "4",
    "R",
    "T",
    "6",
    "7",
    "U",
    "I",
    "9",
    "0",
    "P",
    "°",
    "+",
  ],
];

var keyPath = [];

function showPath() {
  keyPath.forEach((char) => {
    const key = getHtmlKey(char);
    key.classList.add("way");
    domElements.keyWay.push(key);
  });
}

function showObstacles() {
  domElements.keys.forEach((key) => {
    if (!key.classList.contains("way")) {
      const keyPos = getPosition(key);
      let node;
      const val = getRandomInt(3);
      if (val === 1) {
        node = domElements.greenbush.cloneNode();
      } else if (val === 2) {
        node = domElements.redbush.cloneNode();
      }
      if (!!node) {
        setPosition(node, keyPos);
        node.style.display = "block";
        document.body.appendChild(node);
      }
    }
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
    setTimeout(() => {
      const key = getHtmlKey(userChar);
      setPosition(domElements.character, getPosition(key));
    }, charIndex * 500);
  }
}

function getHtmlKey(charKey) {
  return domElements.keys.find(
    (key) => charKey === key.getAttribute("keychar")
  );
}

handleKeydown = function (evt) {
  switch (evt.which) {
    case 112: //F1
      evt.preventDefault();
      const values = document.querySelectorAll(".keyvalue");
      values.forEach((val) => {
        if (val.offsetParent === null) {
          val.style.display = "block";
        } else {
          val.style.display = "none";
        }
      });
      break;
    case 13: //enter
      evt.preventDefault();
      domElements.menu.style.display = "none";
      showPath();
      showObstacles();
      setCharacterStartPos();
      setGoldenIdolPos();
      setTimeout(() => {
        var userWay = prompt("Show me the way! (Use CAPS LOCK)");
        usercharWay = Array.from(userWay);
        if (usercharWay.length != keyPath.length) {
          gameState.error = true;
        } else {
          for (let charIndex = 0; charIndex < usercharWay.length; charIndex++) {
            if (usercharWay[charIndex] !== keyPath[charIndex]) {
              gameState.error = true;
              break;
            }
          }
        }
        moveCharacter();

        if (gameState.error === true) {
          domElements.error.style.display = "block";
        } else {
          domElements.success.style.display = "block";
        }
      }, 500);
      break;
    default:
      break;
  }
};
