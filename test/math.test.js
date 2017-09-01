const { assert } = require('chai');
const mathFunc = require('../lib/math.js');

describe('randomInt', () => {
    it('should return a number', () => {
        assert.isNumber(mathFunc.randomInt(1, 6))
    });
});