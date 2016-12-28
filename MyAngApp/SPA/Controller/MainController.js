var MainController = function ($scope, Api) {
    $scope.models = {
        
    };

    $scope.selectedLocation = null;

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }

    function GetLocations()
    {
        SetBusy($("#LocationSelector"));
        Api.GetApiCall("Locations", "GetLocations", function (event) {
            SetBusy($("#LocationSelector"),true);
            if (event.hasError == true) {
                $scope.setError(event.error.data);
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