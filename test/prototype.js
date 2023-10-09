const Mtrx = require('../src/Mtrx.js');
const assert = require('assert')
const expect = require('chai').expect

describe("prototype", function() {            
    it(`get`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        var res = test.get(0,0)
        //assert.equal(res, 1);
        expect(res).to.equal(1)
    })  

    it(`set`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        test.set(1,1,4)
        //assert.equal(test.get(1,1), 4);
        expect(test.get(1,1)).to.equal(4)
    })  

    it(`changeRows`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        test.changeRows(1,1)        
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4],
                    [1,1,1,1]]
        expect(test).to.deep.equal(mtrx)
        //assert.deepEqual(test, mtrx);
    })  

    it(`changeCols`, function() {
        var test = Mtrx.diag([1,2,3,4]);
        test.changeCols(1,1)        
        var mtrx = [[1,0,0,0,1],
                    [0,2,0,0,1],
                    [0,0,3,0,1],
                    [0,0,0,4,1],]

        expect(test).to.deep.equal(mtrx)
    })

    it(`resetLike1`, function() {
        var test = Mtrx.zeros();               
        var mtrx = [[1,0,0,0],
                    [0,2,0,0],
                    [0,0,3,0],
                    [0,0,0,4]]
        test.resetLike(mtrx)
        expect(test).to.deep.equal(mtrx)
    })

    it(`resetLike2`, function() {
        var test = Mtrx.diag([1,2,3,4]);               
        var mtrx = [[1,0,0,1,1],
                    [0,2,0,1,1],
                    [0,0,3,1,1],
                    [0,0,0,4,1]]
        test.resetLike(mtrx)
        expect(test).to.deep.equal(mtrx)
    })

    it(`resetLike3`, function() {
        var test = Mtrx.diag([1,2,3,4]);               
        var mtrx = [[1,0,0,1],
                    [0,2,0,1],
                    [0,0,3,1],
                    [0,0,0,4],
                    [0,0,0,4]]
        test.resetLike(mtrx)
        expect(test).to.deep.equal(mtrx)
    })

    it(`cof`, function() {
        var test = Mtrx.diag([1,2,3,4]);               
        test = test.cof(0,0)
        var mtrx = [[2,0,0],
                    [0,3,0],
                    [0,0,4]]
        expect(test).to.deep.equal(mtrx)
    })

    it(`T`, function() {
        var test = [[1,1,1],
                    [0,0,0],
                    [0,0,0]]
        var test = new Mtrx(test)
        var test = test.T()
        var mtrx = [
                    [1,0,0],
                    [1,0,0],
                    [1,0,0]
                    ]
        expect(test).to.deep.equal(mtrx)
    })

    it(`compan`, function() {
        var test = [[1,2,0],
                    [2,0,6],
                    [7,8,9]]
        var test = new Mtrx(test)
        var test = test.compan()
        var mtrx = [[-48,-24,16],
                    [18,9,-6],
                    [12,6,-4]]
        expect(test).to.deep.equal(mtrx)
    })

    it(`inv`, function() {
        var test = [[1,0,0],
                    [0,2,0],
                    [0,0,4]]
        var test = new Mtrx(test)
        var test = test.inv()
        var mtrx = [[1,0,0],
                    [0,0.5,0],
                    [0,0,0.25]]
        expect(test).to.deep.equal(mtrx);
    })

    it(`LUP`, function() {
        var test = [[1,0,0],
                    [2,1,0],
                    [2,2,1]]
        var test = new Mtrx(test)
        var res = test.LUP()
        var L = res.L
        var U = res.U
        var P = res.P
        var mL = [[1,0,0],
                    [1,1,0],
                    [0.5,-0.5,1]]
        var mU = [[2,1,0],
                    [0,1,1],
                    [0,0,0.5]]
        var mP = [[0,1,0],
                    [0,0,1],
                    [1,0,0]]
        
        expect(L).to.deep.equal(mL)
        expect(U).to.deep.equal(mU)
        expect(P).to.deep.equal(mP)
    })

    it(`mapMtrx`, function() {
        var test = Mtrx.diag([1,1,1])
        test = test.mapMtrx((i,j) => i + j)
        var mtrx = [[ 1, 0, 0 ], 
                    [ 1, 2, 1 ], 
                    [ 2, 2, 3 ]]
        
        expect(test).to.deep.equal(mtrx);
    })
   

    it(`everyMtrxtrue`, function() {
        var test = Mtrx.diag([1,1,1])
        test = test.everyMtrx((v) => v > -1, true)
        var mtrx = [[ 1, 0, 0 ], 
                    [ 1, 2, 1 ], 
                    [ 2, 2, 3 ]]
        
        expect(test).to.equal(true)
        //assert.deepEqual(1, 1);   
    })

    it(`everyMtrxfalse`, function() {
        var test = Mtrx.diag([1,1,1])
        test = test.everyMtrx((v) => v < 0, true)
        var mtrx = [[ 1, 0, 0 ], 
                    [ 1, 2, 1 ], 
                    [ 2, 2, 3 ]]
        
        expect(test).to.equal(false)
        //assert.deepEqual(1, 1);   
    })

    it(`someMtrxtrue`, function() {
        var test = Mtrx.diag([1,1,1])
        test = test.someMtrx((v) => v > 0, true)
        var mtrx = [[ 1, 0, 0 ], 
                    [ 1, 2, 1 ], 
                    [ 2, 2, 3 ]]
        
        expect(test).to.equal(true)
        //assert.deepEqual(1, 1);   
    })

    it(`someMtrxfalse`, function() {
        var test = Mtrx.diag([1,1,1])
        test = test.someMtrx((v) => v > 1, true)
        var mtrx = [[ 1, 0, 0 ], 
                    [ 1, 2, 1 ], 
                    [ 2, 2, 3 ]]
        
        expect(test).to.equal(false)
        //assert.deepEqual(1, 1);   
    })

    it(`reduceMtrx`, function() {
        var test = new Mtrx([  [ 1, 5, 1 ], 
                                [ 2, 11, 5 ], 
                                [ 1, 2, 3 ]])
        
        test = test.reduceMtrx((v) => v * 2, 1)
        
        expect(test).to.equal(512)
        //assert.deepEqual(1, 1);   
    })

    it(`rightMul`, function() {
        
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        const mtrx = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        
        expect(m.rightMul(n)).to.deep.equal(mtrx)
        //assert.deepEqual(1, 1);   
    })

    it(`leftMul`, function() {
        
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        const mtrx = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        
        expect(m.leftMul(n)).to.deep.equal(mtrx)
        //assert.deepEqual(1, 1);   
    })

    it(`rightDiv`, function() {
        
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        const mtrx = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        
        expect(n.rightDiv(m)).to.deep.equal(mtrx)
        //assert.deepEqual(1, 1);   
    })

    it(`leftDiv`, function() {
        
        const m = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]])
        const n = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        const mtrx = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        
        expect(m.leftDiv(n)).to.deep.equal(mtrx)
        //assert.deepEqual(1, 1);   
    })

})