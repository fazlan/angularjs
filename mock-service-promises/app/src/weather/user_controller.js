'use strict';

angular
    .module('weather.controllers.module', ['weather.services.module'])
    .controller('WeatherController',
    [ '$scope', '$http' , 'WeatherService', function ($scope, $http, WeatherService) {

        function populateTempInfo(data) {
            var temperature = {};
            temperature['temp'] = data.main.temp;
            temperature['humidity'] = data.main.humidity;
            temperature['temp_min'] = data.main.temp_min;
            temperature['temp_max'] = data.main.temp_max;

            $scope.temperature = temperature;
        }

        function populateWeatherInfo(data) {
            var weatherInfo = {};
            weatherInfo['main'] = data.weather[0].main;
            weatherInfo['description'] = data.weather[0].description;

            $scope.weatherInfo = weatherInfo;
        }

        WeatherService.getWeather().then(function (data) {
            $scope.weather = data.list[0].name;
            populateTempInfo(data.list[0]);
            populateWeatherInfo(data.list[0]);
        });
    }]);
