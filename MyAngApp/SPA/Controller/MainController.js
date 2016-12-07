var MainController = function ($scope) {
    $scope.models = {
        locations: [
            { id: "1", Location: "Bangalore" },
            { id: "2", Location: "Chennai" },
            { id: "3", Location: "Mumbai" }
        ]
    };

    $scope.selectedLocation = $scope.models.locations[0];

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }
}
MainController.$inject = ['$scope'];