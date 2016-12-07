var GridController = function ($scope) {
    $scope.data = {
        lowstockdata: {
            totalitems: 726,
            currentPage: 1,
            itemsperpage: 10,
            data: []
        }
    };

    function GetData()
    {
        $scope.data.lowstockdata.data = [];
        for (i = 0; i < $scope.data.lowstockdata.itemsperpage; i++)
        {
            var rndnum = ($scope.data.lowstockdata.currentPage * 10) + i;
            $scope.data.lowstockdata.data.push({
                SKU: "SKU" + rndnum,
                ProductTitle: "ProductTitle" + rndnum,
                OnOrder: rndnum * 2,
                Due: rndnum - 1,
                StockLevel: rndnum
            });
        }
    }

    GetData();
}

GridController.$inject = ['$scope'];