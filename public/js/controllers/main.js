angular.module('productController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Products', function($scope, $http, Products) {
		// $scope.search = {};
		$scope.orderProp = 'product.title';
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all products and show them
		// use the service to get all the products
		Products.get()
			.success(function(data, status) {
				$scope.products = data;
				$scope.loading = false;
				console.log('status:');
        console.log(status);
        console.log('data response:');
        console.log(data);
			});

	}]);

	/*
	// inject the Todo service factory into our controller
	.controller('shopController', ['$scope','$http','Shop', function($scope, $http, Shop) {
		// $scope.search = {};
		// $scope.orderProp = 'product.title';
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all products and show them
		// use the service to get all the products
		Shop.get()
			.success(function(data, status) {
				$scope.shop = data;
				$scope.loading = false;
				console.log('status:');
        console.log(status);
        console.log('data response:');
        console.log(data);
			});

	}]);
	*/

