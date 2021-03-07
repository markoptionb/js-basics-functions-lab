// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber >= 42)
    {return blockNumber -42}
    else {return 42 - blockNumber
    }
}
function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264}

function distanceTravelledInFeet(start, finish){
    if (start >= finish)
    {return (start - finish) * 264}
    else {return (finish - start) * 264}
    }

function calculatesFarePrice(start, finish){
        if (distanceTravelledInFeet(start, finish) <= 400)
        return 0;
        else if (distanceTravelledInFeet(start, finish) <=2000)
        return ((distanceTravelledInFeet(start, finish) - 400) * 0.02);
        else if (distanceTravelledInFeet(start, finish) <=2499)
        return 25;
        else if (distanceTravelledInFeet(start, finish) >=2500)
        return 'cannot travel that far'
    }