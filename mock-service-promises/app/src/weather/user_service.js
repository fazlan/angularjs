'use strict';
angular
    .module('weather.services.module', [])
    .factory('WeatherService', function ($http) {
        var openweatherMapAPI = {};

        openweatherMapAPI.getWeather = function () {
            return $http('http://api.openweathermap.org/data/2.5/find?q=Melbourne,au&units=metric');
        };

        return openweatherMapAPI;
    });