var Apps = angular.module('App', ['ngRoute', 'ui.bootstrap','chart.js']);
Apps.controller('MainController', MainController);
Apps.controller('GridController', GridController);
Apps.controller('ViewProductController', ViewProductController);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/grid', { templateUrl: 'SPA/Views/Grid.html', controller: GridController })
        .otherwise({ redirectTo: function () { return '/grid'; } });
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];
Apps.config(configFunction);