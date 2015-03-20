angular.module('productService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Products', ['$http',function($http) {
		return {
			get : function() {
        shop_id = 'fiddlefishstore'
        api_key = 'api_key=3ugcu6nyygcbysomqa2ed2ja';
        fields = '&fields=title,url,price,quantity,description,listing_id,last_modified_tsz';
        limit = '&limit=100';
        includes = '&includes=MainImage';
        callback = '&callback=JSON_CALLBACK';
        etsyURL = 'https://openapi.etsy.com/v2/shops/'
          +shop_id
          +'/listings/active.js?'
          +api_key
          +fields
          +limit
          +includes
          +callback   
        return $http.jsonp(etsyURL);
			}
		}
	}]);

	/*
	// super simple service
	// each function returns a promise object 
	.factory('Shop', ['$http',function($http) {
		return {
			get : function() {
        shop_id = 'fiddlefishstore'
        api_key = 'api_key=3ugcu6nyygcbysomqa2ed2ja';
        fields = '&fields=title,url,price,quantity,description,listing_id';
        limit = '&limit=100';
        includes = '&includes=MainImage';
        callback = '&callback=JSON_CALLBACK';
        etsyURL = 'https://openapi.etsy.com/v2/shops/'
          +shop_id
          // +'/listings/active.js?'
          +api_key
          //+fields
          +limit
          //+includes
          +callback   
        return $http.jsonp(etsyURL);
			}
		}
	}]);
	*/