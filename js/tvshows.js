myApp.factory('tvshows', ['$http', function($http) { 
  return $http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US&page=1') 
             .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);