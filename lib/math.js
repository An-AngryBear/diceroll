'use strict';

//The math file should export an Object with a method called randomInt that accepts two arguments, 
// a lower bound and an upper bound. This function should return a random integer inclusive of the lower bound and the upper bound.

let math = {};

math.randomInt = (lower, upper) => {
    return Math.floor((Math.random() * upper) + lower);
};

module.exports = math;