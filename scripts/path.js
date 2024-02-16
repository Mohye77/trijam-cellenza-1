function initPath(start, end, isLeftSide) {
  console.log("start", start);
  console.log("end", end);
  console.log("isLeftSide", isLeftSide);
  var lastKey = start;
  var path = [];
  while (lastKey != end) {
    path.push(lastKey);
    console.log(lastKey);
    console.log(path);
    lastKey = getNextKey(keyCodeByKey[lastKey], end, isLeftSide, path);
    if (lastKey === -1 || lastKey == null) {
      console.log("Je reset");
      path = [];
      lastKey = start;
    }
  }
  path.push(lastKey);
}

function getNextKey(key, endKey, isLeftSide, currentPath) {
  if (isLeftSide) {
    if (key.rightNeighbors == null) {
      console.log("je suis null", key);
    }
    if (key.rightNeighbors[endKey] != null) {
      return endKey;
    } else {
      var randomKey =
        key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];

      if (key.rightNeighbors.length === 0) {
        return -1;
      }
      while (
        currentPath.findIndex((x) => {
          return x === randomKey;
        }) != -1
      ) {
        randomKey =
          key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];
      }
      return randomKey;
    }
  } else {
    if (key.leftNeighbors == null) {
      console.log("je suis null", key);
    }
    if (key.leftNeighbors[endKey] != null) {
      return endKey;
    } else {
      var randomKey =
        key.leftNeighbors[getRandomInt(key.leftNeighbors.length - 1)];

      if (key.rightNeighbors.length === 0) {
        return -1;
      }
      while (
        currentPath.findIndex((x) => {
          return x === randomKey;
        }) != -1
      ) {
        randomKey =
          key.leftNeighbors[getRandomInt(key.leftNeighbors.length - 1)];
      }
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
    } else if (startKeyRandom == 1) {
      startKey = "A";
    } else if (startKeyRandom == 2) {
      startKey = "Q";
    } else {
      startKey = ">";
    }
  } else {
    if (startKeyRandom == 0) {
      startKey = "+";
    } else if (startKeyRandom == 1) {
      startKey = "£";
    } else if (startKeyRandom == 2) {
      startKey = "µ";
    } else {
      startKey = "*";
    }
  }

  return startKey;
}

function getEndKey(startLeftSide) {
  var endKeyRandom = getRandomInt(4);
  var endKey;
  if (startLeftSide === true) {
    if (endKeyRandom == 0) {
      endKey = "+";
    } else if (endKeyRandom == 1) {
      endKey = "£";
    } else if (endKeyRandom == 2) {
      endKey = "µ";
    } else {
      endKey = "*";
    }
  } else {
    if (endKeyRandom == 0) {
      endKey = "1";
    } else if (endKeyRandom == 1) {
      endKey = "A";
    } else if (endKeyRandom == 2) {
      endKey = "Q";
    } else {
      endKey = ">";
    }
  }

  return endKey;
}

function generatePath(startKey, endkey) {}
