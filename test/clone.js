const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("clone", function() {            
    it(`clone`, function() {
        var mtrx = Mtrx.eye(4)
        var test = Mtrx.clone(mtrx)
        expect(test).to.deep.equal(mtrx)
        //assert.deepEqual(test, mtrx);
    })  
})