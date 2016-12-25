var GridController = function ($scope, $uibModal) {
    $scope.data = {
        lowstockdata: {
            totalitems: 726,
            currentPage: 1,
            itemsperpage: 10,
            data: []
        }
    };

    function GetData() {
        $scope.data.lowstockdata.data = [];
        for (i = 0; i < $scope.data.lowstockdata.itemsperpage; i++) {
            var currLoation = $scope.selectedLocation.Location;
            var rndnum = ($scope.data.lowstockdata.currentPage * 10) + i;
            $scope.data.lowstockdata.data.push({
                SKU: "SKU" + rndnum,
                ProductTitle: "ProductTitle" + rndnum,
                OnOrder: rndnum * 2,
                Due: rndnum - 1,
                StockLevel: rndnum,
                Location: currLoation
            });
        }
    }

    GetData();
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


GridController.$inject = ['$scope', '$uibModal'];