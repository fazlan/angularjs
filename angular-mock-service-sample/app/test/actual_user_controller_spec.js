'use strict';

describe('The Actual User Controller', function () {
    var scope;

    beforeEach(function () {

        // load the module
        module('user.module');

        // inject the angular services
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller('UserController', {$scope: scope});
        });
    });

    it('Returns the list of users', function () {
        expect(scope.users).toContain('actual-user1', 'actual-user2', 'actual-user3');
    });
});
