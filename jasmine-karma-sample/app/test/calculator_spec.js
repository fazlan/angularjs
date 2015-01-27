'use strict';


describe('a Calculator', function () {

    var theCalculator = org_namespace.Calculator;

    beforeEach(function () {
        theCalculator.reset();
    });

    it('checks if the calculator has been reset', function () {
        expect(theCalculator.result).toBe(0);
    });

    it('adds two integers', function () {
        theCalculator.add(10, -30);
        expect(theCalculator.result).toBe(-20);
    })

    it('multiplies two integers', function () {
        theCalculator.multiply(10, 5);
        expect(theCalculator.result).toBe(50);
    })
});