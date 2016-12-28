﻿var Apps = angular.module('App', ['ngRoute', 'ui.bootstrap', 'chart.js']);
Apps.service('Api',['$http',ApiService]);
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

Apps.run(function ($rootScope, $timeout) {
    $rootScope.errorMessage = "";
    $rootScope.isError = false;
    $rootScope.setError = function (errorMessage) {
        $rootScope.errorMessage = errorMessage;
        if (errorMessage != null && errorMessage != "") {
            $rootScope.isError = true;
        }
        else {
            $rootScope.isError = false;
        }
        $timeout(function () {
            $rootScope.setError(null);
        }, 3000);
    }
});

function SetBusy(element, hide)
{
    if (hide == true)
    {
        element.LoadingOverlay("hide");
    }
    else
    {
        element.LoadingOverlay("show", {image : "", fontawesome : "fa fa-spinner fa-spin"});
    }
}