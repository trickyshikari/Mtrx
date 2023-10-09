const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("isMtrx", function() {            
    it(`isMtrx`, function() {
        var test = Mtrx.eye(4);
        //assert.equal(Mtrx.isMtrx(test), true);
        expect(Mtrx.isMtrx(test)).to.equal(true)
    })  

    it(`isntMtrx`, function() {
        var test = [[1,2,3],[4,5,6]];
        expect(Mtrx.isMtrx(test)).to.equal(false)
        //assert.equal(Mtrx.isMtrx(test), false);
    })  
})