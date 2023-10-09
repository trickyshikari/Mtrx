const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("isDiag", function() {            
    it(`isDiag`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        //assert.equal(Mtrx.isDiag(test), true);
        expect(Mtrx.isDiag(test)).to.equal(true)
    })  

    it(`isntDiag`, function() {
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0]]
        //assert.equal(Mtrx.isDiag(mtrx), false);
        expect(Mtrx.isDiag(mtrx)).to.equal(false)
    })  
})
