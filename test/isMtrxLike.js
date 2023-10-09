const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("isMtrxLike", function() {            
    it(`isMtrxLike`, function() {
        var test = Mtrx.eye(4);
        //assert.equal(Mtrx.isMtrxLike(test), true);
        expect(Mtrx.isMtrxLike(test)).to.equal(true)
    })  

    it(`isntMtrxLike`, function() {
        var test = [4,5,6];
        expect(Mtrx.isMtrxLike(test)).to.equal(false)
        //assert.equal(Mtrx.isMtrxLike(test), false);
    })  

    it(`isntMtrxLike`, function() {
        var test = 4;
        expect(Mtrx.isMtrxLike(test)).to.equal(false)
        //equal(Mtrx.isMtrxLike(test), false);
    }) 
})