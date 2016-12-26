var MainController = function ($scope, Api) {
    $scope.models = {
        
    };

    $scope.selectedLocation = null;

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }

    function GetLocations()
    {
        Api.GetApiCall("Locations", "GetLocations", function (event) {
            if (event.hasErrors == true) {
                alert('Error getting locations' + event.error);
            }
            else {
                $scope.models.locations = event.result;
                if ($scope.models.locations.data.length > 0) {
                    $scope.selectedLocation = $scope.models.locations.data[0];
                }
            }
        });
    }
    GetLocations();
}
MainController.$inject = ['$scope','Api'];