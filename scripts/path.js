function initPath(start, end, isLeftSide) {
  console.log("start", start);
  console.log("end", end);
  console.log("isLeftSide", isLeftSide);
  var disableKeys = initDisableKeys(start, end, isLeftSide);
  var lastKey = start;
  var path = [];
  while (lastKey != end) {
    path.push(lastKey);
    disableKeys.push(lastKey);
    console.log(lastKey);
    console.log(path);
    lastKey = getNextKey(
      keyCodeByKey[lastKey],
      end,
      isLeftSide,
      path,
      disableKeys
    );
    if (lastKey === -1 || lastKey == null) {
      path = [];
      lastKey = start;
      disableKeys = initDisableKeys(start, end, isLeftSide);
    }
  }
  path.push(lastKey);
  console.log(path);
  return path;
}

function getNextKey(key, endKey, isLeftSide, currentPath, disableKeys) {
  if (isLeftSide) {
    if (
      key.rightNeighbors.findIndex((x) => {
        return x === endKey;
      }) !== -1
    ) {
      return endKey;
    } else {
      var randomKey =
        key.rightNeighbors[getRandomInt(key.rightNeighbors.length)];

      if (key.rightNeighbors.length === 0) {
        return -1;
      }
      var alreadyCheck = [];
      var listIsComplete = false;
      while (
        disableKeys.findIndex((x) => {
          return x === randomKey;
        }) != -1
      ) {
        randomKey = key.rightNeighbors[getRandomInt(key.rightNeighbors.length)];
        if (listIsComplete === true) {
          return -1;
        }
        if (
          alreadyCheck.findIndex((x) => {
            return x === randomKey;
          }) === -1
        ) {
          alreadyCheck.push(randomKey);
          if (alreadyCheck.length === key.rightNeighbors.length) {
            listIsComplete = true;
          }
        }
      }
      disableKeys = disableKeyNeighbors(
        currentPath[currentPath.length - 1],
        disableKeys,
        isLeftSide
      );
      return randomKey;
    }
  } else {
    if (
      key.leftNeighbors.findIndex((x) => {
        return x === endKey;
      }) !== -1
    ) {
      return endKey;
    } else {
      var randomKey = key.leftNeighbors[getRandomInt(key.leftNeighbors.length)];

      if (key.rightNeighbors.length === 0) {
        return -1;
      }
      var alreadyCheck = [];
      var listIsComplete = false;
      while (
        disableKeys.findIndex((x) => {
          return x === randomKey;
        }) != -1
      ) {
        if (listIsComplete === true) {
          return -1;
        }
        randomKey = key.leftNeighbors[getRandomInt(key.leftNeighbors.length)];
        if (
          alreadyCheck.findIndex((x) => {
            return x === randomKey;
          }) === -1
        ) {
          alreadyCheck.push(randomKey);
          if (alreadyCheck.length === key.leftNeighbors.length) {
            listIsComplete = true;
          }
        }
      }
      disableKeys = disableKeyNeighbors(
        currentPath[currentPath.length - 1],
        disableKeys,
        isLeftSide
      );
      return randomKey;
    }
  }
}

function getStartKey(startLeftSide) {
  var startKeyRandom = getRandomInt(4);
  var startKey;
  if (startLeftSide === true) {
    if (startKeyRandom == 0) {
      startKey = "1";
    } else if (startKeyRandom === 1) {
      startKey = "A";
    } else if (startKeyRandom === 2) {
      startKey = "Q";
    } else {
      startKey = "<";
    }
  } else {
    if (startKeyRandom === 0) {
      startKey = "+";
    } else if (startKeyRandom === 1) {
      startKey = "£";
    } else if (startKeyRandom === 2) {
      startKey = "µ";
    } else {
      startKey = "§";
    }
  }

  return startKey;
}

function getEndKey(startLeftSide) {
  var endKeyRandom = getRandomInt(4);
  var endKey;
  if (startLeftSide === true) {
    if (endKeyRandom === 0) {
      endKey = "+";
    } else if (endKeyRandom === 1) {
      endKey = "£";
    } else if (endKeyRandom === 2) {
      endKey = "µ";
    } else {
      endKey = "§";
    }
  } else {
    if (endKeyRandom === 0) {
      endKey = "1";
    } else if (endKeyRandom === 1) {
      endKey = "A";
    } else if (endKeyRandom === 2) {
      endKey = "Q";
    } else {
      endKey = "<";
    }
  }

  return endKey;
}

function initDisableKeys(startKey, endKey, isLeftSide) {
  var disableKeys = [];

  if (isLeftSide) {
    if (startKey !== "<") {
      disableKeys.push("<");
    }
    if (endKey !== "µ") {
      disableKeys.push("µ");
    }
  } else {
    if (endKey !== "<") {
      disableKeys.push("<");
    }
    if (startKey !== "µ") {
      disableKeys.push("µ");
    }
  }
  return disableKeys;
}

function disableKeyNeighbors(key, disableKeys, isLeftSide) {
  if (isLeftSide) {
    keyCodeByKey[key].rightNeighbors.forEach((k) => {
      if (
        disableKeys.findIndex((x) => {
          return x === k;
        }) === -1
      ) {
        disableKeys.push(k);
        console.log("new DisableKey ", k, " for key ", key);
      } else {
        console.log("key find ", k, " for key ", key);
      }
    });
  } else {
    keyCodeByKey[key].leftNeighbors.forEach((k) => {
      if (
        disableKeys.findIndex((x) => {
          return x === k;
        }) === -1
      ) {
        console.log("new DisableKey ", k, " for key ", key);
        disableKeys.push(k);
      } else {
        console.log("key find ", k, " for key ", key);
      }
    });
  }
  return disableKeys;
}

function generatePath(startKey, endkey) {}
