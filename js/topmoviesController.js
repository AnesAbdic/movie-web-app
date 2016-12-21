myApp.controller('topmoviesController', ['$scope', 'movies', 'dataMovies', '$rootScope', function($scope, movies, dataMovies, $rootScope) {
    $scope.movies = [];
    
    if($scope.movies.length < 1){
        movies.success(function(data) {
          $scope.movies=data.results;
      
        });
    }
    
    $rootScope.$on("movieMethod", function(){       
        $scope.movies = dataMovies.getSearch();
        
        if($scope.movies.length < 1){
            movies.success(function(data) {
  
                $scope.movies=data.results;
      
            });
        }
    });
        
}]);