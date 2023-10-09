const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("diag", function() {            
    it(`diag`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4]]
        expect(test).to.deep.equal(mtrx)
    })  
})