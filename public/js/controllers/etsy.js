angular.module('etsyController', [])

  // inject the Etsy API factory into our controller
  .controller('mainController', ['$scope','$http','Etsy', function($scope, $http, Etsy) {
    $scope.formData = {};
    $scope.loading = true;

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Etsy.get()
      .success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
        // console.log('status:');
        // console.log(status);
        // console.log('data response:');
        // console.log(data);
      }).
      error(function(data, status) {
        // $scope.data = data || "Request failed";
        // $scope.status = status;
    });

  }]);