'use strict';

// The dice file should export an object with at least two methods called roll and toDiceNotation. The toDiceNotation 
// method should accept an object with a sides and count property and convert it to a String with the dice 
// notation i.e. "1d6" or "2d40". The roll method should accept a dice notation String and produce a random Number 
// which is the result of the dice roll.
let randomizer = require('./math.js');
let DiceObj = {};

DiceObj.toDiceNotation = (sidesAndCountObj) => {
    //convert it to a String with the dice notation i.e. "1d6" or "2d40".
    let sidesAndCountString = `${sidesAndCountObj.count}d${sidesAndCountObj.sides}`
    return sidesAndCountString;
};

DiceObj.roll = (diceNotationString) => {
    let diceSides = parseInt(diceNotationString.substr(diceNotationString.indexOf('d') + 1, diceNotationString.length));
    let rollCount = parseInt(diceNotationString.substr(0, diceNotationString.indexOf('d')));
    let returnNumber = 0;
    for(let i = 0; i < rollCount; i++) {
        let randomNum = randomizer.randomInt(1, parseInt(diceSides));
        returnNumber += randomNum;
    };
    return returnNumber;
};

module.exports = DiceObj;