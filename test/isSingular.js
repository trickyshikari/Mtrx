const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("isSingular", function() {            
    it(`isSingular`, function() {
        var test = [[2,3],[4,6]];
        //assert.equal(Mtrx.isSingular(test), true);
        expect(Mtrx.isSingular(test)).to.equal(true)
    })  

    it(`isntSingular`, function() {
        var test = [[2,3],[8,6]];
        //assert.equal(Mtrx.isSingular(test), false);
        expect(Mtrx.isSingular(test)).to.equal(false)
    })  

    it(`isSingular`, function() {
        var test = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0]]
        //assert.equal(Mtrx.isSingular(test), true);
        expect(Mtrx.isSingular(test)).to.equal(true)
    }) 


})
