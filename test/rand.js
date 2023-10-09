const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("rand", function() {            
    it(`rand`, function() {
        var test = Mtrx.rand(3,3);
        var result = false;
        if(test.rows === 3 && test.cols === 3){
            result = true;
        }
        //assert.equal(result, true);
        expect(result).to.equal(true)
    })  
})