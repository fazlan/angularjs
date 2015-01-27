'use strict';

angular
    .module('user.controllers.module', ['user.services.module'])
    .controller('UserController', function ($scope, UserService) {
        $scope.users = UserService.getUsers();
    });
