function initUI(){
    
}



initGame()
{
    var startLeftSide = getRandomInt(2) === 1;
    var startKey= getStartKey(startLeftSide);
    var endKey = getEndKey(startLeftSide);
    initPath(startKey, endKey, startLeftSide)
};

function initPath(start, end, isLeftSide)
{
    var lastKey = start;
    var path = [];
    while(lastKey != end)
    {
        path.push(start);
        lastKey = getNextKey(lastKey, end, isLeftSide, path);
        if(lastKey === -1)
        {
            path = [];
            lastKey = start;
        }
    }
    path.push(end)

}

function getNextKey(key, endKey, isLeftSide, currentPath)
{ 
    if(isLeftSide)
    {
        if(key.rightNeighbors[endKey] != null)
        {
            return endKey;
        }
        else
        {
            var randomKey = key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];

            if(randomKey = -1)
            {
                return -1;
            }
            while(currentPath.Contains(randomKey))
            {
                randomKey = key.rightNeighbors[getRandomInt(key.rightNeighbors.length - 1)];
            }
            return randomKey;
        }
    }
    else
    {
        if(key.leftNeighbors[endKey] != null)
        {
            return endKey;
        }
        else
        {
            var randomKey = key.leftNeighbors[getRandomInt(key.leftNeighbors.length - 1)];

            if(randomKey = -1)
            {
                return -1;
            }
            while(currentPath.Contains(randomKey))
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
            startKey = "0"; 
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
            endKey = "0"; 
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