const { assert } = require('chai');
const parseArgs = require('../lib/parse-args.js');

describe('arg parser', () => {
    it('should return an Object', () => {
        assert.isObject(parseArgs([]));
    });
});