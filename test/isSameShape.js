const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("isSameShape", function() {            
    it(`isSameShape`, function() {
        var mtrx = [[0,1],[1,2]]
        var mtrx2 = [[0,0],[0,0]]
        expect(Mtrx.isSameShape(mtrx,mtrx2)).to.equal(true)
        //assert.equal(Mtrx.isSameShape(mtrx,mtrx2), true);
    })  

    it(`isntSameShape`, function() {
        var mtrx = [[0,1],[1,2]]
        var mtrx2 = [[4,5,6],[4,5,6]]
        expect(Mtrx.isSameShape(mtrx,mtrx2)).to.equal(false)
        //assert.equal(Mtrx.isSameShape(mtrx,mtrx2), false);
    })  

})