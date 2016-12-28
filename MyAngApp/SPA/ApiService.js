var ApiService = function ($http) {
    var result;
    this.GetApiCall = function (controllerName, method, callback) {
        result = $http.get('api/' + controllerName + '/' + method).then(
            function (data, status) {
                var event = {
                    result: data,
                    hasError: false
                };
                callback(event);
            },function (data, status) {
                var event = {
                    result: "",
                    hasError: true,
                    error: data
                };
                callback(event);
            }
            );
    }
    this.PostApiCall = function (controllerName, methodName, obj, callback) {
        result = $http.post('api/' + controllerName + '/' + methodName, obj).then(function (data, status) {
            var event = {
                result: data,
                hasError: false
            };
            callback(event);
        },function (data, status) {
                var event = {
                    result: "",
                    hasError: true,
                    error: data
                };
                callback(event);
            }
    );
    }
}