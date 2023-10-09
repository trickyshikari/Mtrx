const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("eye", function() {            
    it(`eye`, function() {
        var test = Mtrx.eye(4);
        var mtrx = [[1,0,0,0],
                    [0,1,0,0],
                    [0,0,1,0],
                    [0,0,0,1]]
        //assert.deepEqual(mtrx, test);
        expect(mtrx).to.deep.equal(test)
    })  
})