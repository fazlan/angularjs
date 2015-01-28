'use strict';
describe('The Mocked Weather Controller', function () {
    var scope;

    beforeEach(function () {

        // load the module
        angular.mock.module('weather.module');

        // inject the angular services
        inject(function ($controller, $rootScope, $q) {
            scope = $rootScope.$new();
            var mockedOpenweatherMapAPI = {
                getWeather: function () {
                    var deferred = $q.defer();
                    deferred.resolve(openweatherMapJsonResponse());
                    return deferred.promise;
                }
            };
            $controller('WeatherController', {$scope: scope, WeatherService: mockedOpenweatherMapAPI});
        });
    });

    it('Returns the name of the city', function () {
        scope.$digest();
        expect(scope.weather).toEqual('Melbourne');
    });

    it('Returns the temperature details of Melbourne', function () {
        scope.$digest();
        expect(scope.temperature.temp).toEqual(23.3);
        expect(scope.temperature.humidity).toEqual(45);
        expect(scope.temperature.temp_min).toEqual(21.3);
        expect(scope.temperature.temp_max).toEqual(25.4);
    });

    it('Returns the weather summary details of Melbourne', function () {
        scope.$digest();
        expect(scope.weatherInfo.main).toEqual('Clear');
        expect(scope.weatherInfo.description).toEqual('Sky is Clear');
    });

    function openweatherMapJsonResponse() {
        return { "list": [
            {
                "name": "Melbourne",
                "main": {
                    "temp": 23.3,
                    "humidity": 45,
                    "pressure": 1016.2,
                    "temp_min": 21.3,
                    "temp_max": 25.4
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "Sky is Clear",
                        "icon": "01d"
                    }
                ]
            }
        ]};
    }
});
