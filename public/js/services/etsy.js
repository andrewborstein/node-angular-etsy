angular.module('etsyService', [])

  // super simple service
  // each function returns a promise object 
  .factory('Etsy', ['$http',function($http) {
    return {
      get : function() {
        shop_id = 'fiddlefishstore'
        api_key = '&api_key=3ugcu6nyygcbysomqa2ed2ja';
        fields = '&fields=title,url,price,quantity,description';
        limit = '&limit=100';
        includes = '&includes=MainImage';
        callback = '&callback=JSON_CALLBACK';
        etsyURL = 'https://openapi.etsy.com/v2/shops/'
          +shop_id
          +'/listings/active.js?method=GET'
          +api_key
          +fields
          +limit
          +includes
          +callback   
        return $http.jsonp(etsyURL);
      }
    }
  }]);