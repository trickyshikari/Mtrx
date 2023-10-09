const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("zeros", function() {            
    it(`zeros`, function() {
        var test = Mtrx.zeros(1,4);
        var mtrx = [[0,0,0,0]]
        //assert.deepEqual(mtrx, test);
        expect(test).to.deep.equal(mtrx)
    })  
})