'use strict';


describe('Basic Jasmine Syntax', function() {

    describe('Some simple Jasmine constructs', function() {
        it('expects 2 to be 2', function() {
            expect(2).toBe(2);
        });

        it('expects Foo and Bar are not equal', function() {
            expect('Foo').not.toEqual('Bar');
        })

        it('checks if variable is defined', function() {
            var variable = 1;
            expect(variable).toBeDefined();
        })

        it('checks if variable is undefined', function() {
            var variable;
            expect(variable).toBeUndefined();
        })
    });

    describe('an Array', function() {
        var theArray;

        beforeEach(function() {
            theArray = ['Karma', 'Jasmine'];
        });

        it('checks if the array is not empty', function() {
            expect(theArray).toContain('Karma', 'Jasmine');
        });

        it('adds elements to the array', function() {
            theArray.push('PhantomJS');
            expect(theArray).toEqual(['Karma', 'Jasmine', 'PhantomJS']);
        });

        it('removes elements from the array', function() {
            theArray.pop('Jasmine');
            expect(theArray).toEqual(['Karma']);
        })
    });

});