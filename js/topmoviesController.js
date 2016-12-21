//controlling what data will be shown on movie home
//top rated movies or search data
myApp.controller('topmoviesController', ['$scope', 'movies', 'dataMovies', '$rootScope', function($scope, movies, dataMovies, $rootScope) {
    $scope.movies = [];
    
    if($scope.movies.length < 1){
        movies.success(function(data) {
          $scope.movies=data.results;
      
        });
    }
    
    //gets called when seatch input changes to update view
    $rootScope.$on("movieMethod", function(){       
        $scope.movies = dataMovies.getSearch();
        
        if($scope.movies.length < 1){
            movies.success(function(data) {
  
                $scope.movies=data.results;
      
            });
        }
    });
        
}]);