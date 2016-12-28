var GridController = function ($scope, $uibModal, Api) {
    $scope.data = {
        lowstockdata: {
            totalitems: 0,
            currentPage: 1,
            itemsperpage: 10,
            data: []
        }
    };

    function GetData() {
        if ($scope.selectedLocation != null) {
            $scope.data.lowstockdata.data = [];

            var request = {
                LocationId: $scope.selectedLocation.LocationID,
                PageNumber: $scope.data.lowstockdata.currentPage,
                EntriesPerPage: $scope.data.lowstockdata.itemsperpage
            };
            SetBusy($("#LowStockGrid"));
            Api.PostApiCall("StockQuery", "GetStockLevel", request, function (event) {
                SetBusy($("#LowStockGrid"), true);
                if (event.hasError == true) {
                    alert("Error getting data" + event.error);
                }
                else {
                    $scope.data.lowstockdata.data = event.result.data.rows;
                    $scope.data.lowstockdata.totalitems = event.result.data.TotalItems;
                }
            });
        }

    }

    $scope.pageChanged = function () {
        GetData();
    }

    $scope.$watch('selectedLocation', function () {
        $scope.data.lowstockdata.currentPage = 1;
        GetData();
    });

    $scope.openProduct = function (product) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'SPA/Views/ViewProductWindow.html',
            controller: 'ViewProductController',
            size: "",
            resolve: { data: product }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.data.lowstockdata.selectedItem = selectedItem;
        }, function () {
            alert('error');
            $log.info('Modal dismissed at' + new Date());
        });
    }
}


GridController.$inject = ['$scope', '$uibModal','Api'];