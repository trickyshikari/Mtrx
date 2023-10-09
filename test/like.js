const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("like", function() {            
    it(`like`, function() {
        var mtrx = Mtrx.eye(4)
        var test = Mtrx.like(mtrx)
        expect(test).to.deep.equal(mtrx)
        //assert.deepEqual(test, mtrx);
    })  
})