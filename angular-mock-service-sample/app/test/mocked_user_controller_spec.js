'use strict';
describe('The Mocked User Controller', function () {
    var scope;

    beforeEach(function () {

        // load the module
        module('user.module', function ($provide) {
            var mockedUserService = {};
            mockedUserService.getUsers = function () {
                return ['user1', 'user2'];
            };
            $provide.value('UserService', mockedUserService);
        });

        // inject the angular services
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller('UserController', {$scope: scope});
        });
    });

    it('Returns the list of users', function () {
        expect(scope.users).toContain('user1', 'user2');
    });
});
