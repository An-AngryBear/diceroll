'use strict';

// This parse-args file should export a single function to parse your command line arguments. 
// The function should accept an array containing the arguments passed on the command line. 
// Convert these arguments to an object with a count and sides property.

module.exports = (argsArr) => {
    let argsObj = {};
    if(argsArr[1]) {
        argsObj.count = argsArr[0];
        argsObj.sides = argsArr[1];
    } else if(argsArr[0]) {
        argsObj.count = 1;
        argsObj.sides = argsArr[0];
    } else {
        argsObj.count = 1;
        argsObj.sides = 6;
    };
    return argsObj;
    //Convert these arguments to an object with a count and sides property.
};