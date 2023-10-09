const { Console } = require('console');
const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("equal", function() {            
    it(`equal`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4]]
        var mTrue = Array.from(Array(4), () => new Array(true,true,true,true));
        
        //assert.deepEqual(Mtrx.equal(test,mtrx), mTrue);
        expect(Mtrx.equal(test,mtrx)).to.deep.equal(mTrue)
    })  

    it(`notequal`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,5]]
        var mTrue = Array.from(Array(4), () => new Array(true,true,true,true));
        expect(Mtrx.equal(test,mtrx)).to.not.deep.equal(mTrue)
    }) 


    it(`equalAll`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4]]
        var mTrue = Mtrx.ones(4,4)
        
        //assert.equal(Mtrx.equalAll(test,mtrx), true);
        expect(Mtrx.equalAll(test,mtrx)).to.equal(true)
    })  

    it(`notequalAll`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,5]]
        var mTrue = Mtrx.ones(4,4)
        expect(Mtrx.equalAll(test,mtrx)).to.equal(false)
        //assert.equal(Mtrx.equalAll(test,mtrx), false);
    }) 


    it(`equalAny`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4]]
        var mTrue = Mtrx.ones(4,4)
        
        //assert.equal(Mtrx.equalAny(test,mtrx), true);
        expect(Mtrx.equalAny(test,mtrx)).to.equal(true)
    })  

    it(`equalAny`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,5]]
        var mTrue = Mtrx.ones(4,4)
        expect(Mtrx.equalAny(test,mtrx)).to.equal(true)
        //assert.equal(Mtrx.equalAny(test,mtrx), true);
    }) 
    it(`notequalAny`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[2,1,1,1],
                    [1,3,1,1],
                    [1,1,4,1],
                    [1,1,1,5]]
        var mTrue = Mtrx.ones(4,4)
        expect(Mtrx.equalAny(test,mtrx)).to.equal(false)
        //assert.equal(Mtrx.equalAny(test,mtrx), false);
    }) 
    it(`notequalAny`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var mtrx = [[2,1,1,1],
                    [1,3,1,1],
                    [1,1,4,1],
                    [1,1,1,4]]
        var mTrue = Mtrx.ones(4,4)
        expect(Mtrx.equalAny(test,mtrx)).to.equal(true)
        //assert.equal(Mtrx.equalAny(test,mtrx), true);
    }) 
})