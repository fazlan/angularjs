'use strict';
angular
    .module('user.services.module', [])
    .factory('UserService', function () {
        return {
            getUsers: function () {
                return ['actual-user1', 'actual-user2', 'actual-user3'];
            }
        };
    });