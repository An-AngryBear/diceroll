const { assert } = require('chai');
const diceObj = require('../lib/dice.js');

describe('toDiceNotation', () => {
    it('should return a string', () => {
        assert.isString(diceObj.toDiceNotation({count:1, sides:6}));
    });
});

describe('roll', () => {
    it('should return a number', () => {
        assert.isNumber(diceObj.roll('1d6'));
    });
});

