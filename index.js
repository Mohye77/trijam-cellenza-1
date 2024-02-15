var gameState = {
    started: false,
    error: false,
  };
  
  var character = {};
  var menu = {};
  var error = {};
  var success = {};
  

function initUI(){
    initGame()

    const keys = document.querySelectorAll(".key");
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
}

function moveCharacter(keys) {
  keys.forEach((key) => {});
}


function initGame()
{
    var startLeftSide = getRandomInt(2) === 1;
    var startKey= getStartKey(startLeftSide);
    var endKey = getEndKey(startLeftSide);
    initPath(startKey, endKey, startLeftSide)
};

function initPath(start, end, isLeftSide)
{
    console.log("start", start)
    console.log("end", end)
    console.log("isLeftSide", isLeftSide)
    var lastKey = start;
    var path = [];
    while(lastKey != end)
    {
        path.push(lastKey); 
        console.log(lastKey)
        console.log(path)
        lastKey = getNextKey(keyCodeByKey[lastKey], end, isLeftSide, path);
        if(lastKey === -1 || lastKey == null)
        {
            console.log("Je reset");
            path = [];
            lastKey = start;
        }
    }
    path.push(lastKey)

}

function getNextKey(key, endKey, isLeftSide, currentPath)
{ 
    if(isLeftSide)
    {
        if(key.rightNeighbors == null)
        {
            console.log("je suis null",key)
        }
        if(key.rightNeighbors[endKey] != null)
        {
            return endKey;
        }
        else
        {
            var randomKey = key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];

            if(key.rightNeighbors.length === 0)
            {
                return -1;
            }
            while(currentPath.findIndex( (x) => { return x === randomKey}) != -1)
            {
                randomKey = key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];
            }
            return randomKey;
        }
    }
    else
    {
        if(key.leftNeighbors == null)
        {
            console.log("je suis null",key)
        }
        if(key.leftNeighbors[endKey] != null)
        {
            return endKey;
        }
        else
        {
            var randomKey = key.leftNeighbors[getRandomInt(key.leftNeighbors.length - 1)];

            if(key.rightNeighbors.length === 0)
            {
                return -1;
            }
            while(currentPath.findIndex( (x) => { return x === randomKey}) != -1)
            {
                randomKey = key.leftNeighbors[getRandomInt(key.leftNeighbors.length - 1)];
            }
            return randomKey;
        }
    }
}

function getStartKey(startLeftSide)
{
    var startKeyRandom = getRandomInt(4);
    var startKey;
    if (startLeftSide === true)
    {
        if(startKeyRandom == 0)
        {
            startKey = "1"; 
        } else if (startKeyRandom == 1)
        {
            startKey = "A"; 
        }else if (startKeyRandom == 2)
        {
            startKey = "Q"; 
        } else
        {
            startKey = ">";
        }
    } else
    {
        if(startKeyRandom == 0)
        {
            startKey = "+"; 
        } else if (startKeyRandom == 1)
        {
            startKey = "£"; 
        }else if (startKeyRandom == 2)
        {
            startKey = "µ"; 
        } else
        {
            startKey = "*";
        }
    }

    return startKey;
}

function getEndKey(startLeftSide)
{
    var endKeyRandom = getRandomInt(4);
    var endKey;
    if (startLeftSide === true)
    {
        if(endKeyRandom == 0)
        {
            endKey = "+"; 
        } else if (endKeyRandom == 1)
        {
            endKey = "£"; 
        }else if (endKeyRandom == 2)
        {
            endKey = "µ"; 
        } else
        {
            endKey = "*";
        }
    } else
    {
        if(endKeyRandom == 0)
        {
            endKey = "1"; 
        } else if (endKeyRandom == 1)
        {
            endKey = "A"; 
        }else if (endKeyRandom == 2)
        {
            endKey = "Q"; 
        } else
        {
            endKey = ">";
        }
       
    }

    return endKey;
}

function generatePath(startKey, endkey)
{

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

handleKeydown = function (evt) {
    evt.preventDefault();
  
    switch (evt.which) {
      case 13: //enter
        menu.style.display = "none";
        //showPath
        var userWay;
        setTimeout(() => {
          userWay = prompt("Show me the way!");
        }, 5000);
        userWay.forEach((key) => {
          //compare to Path 1 by 1
          //if fail
          //gameState.error = true;
          //return;
        });
        //moveCharacter
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