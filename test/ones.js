const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("ones", function() {            
    it(`ones`, function() {
        var test = Mtrx.ones(1,4);
        var mtrx = [[1,1,1,1]]
        expect(mtrx).to.deep.equal(test)
        //assert.deepEqual(mtrx, test);
    })  
})