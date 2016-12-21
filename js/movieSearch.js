//movie search data
myApp.controller('movieSearch', function($scope, $http, dataMovies, data, $rootScope) {
    
    $scope.searchmovies = [];
    $scope.searchText = data.getData();
    
    $http.get('https://api.themoviedb.org/3/search/movie?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US&query='+$scope.searchText+'&page=1&include_adult=false').
        then(function(response) {
            $scope.searchmovies = response.data.results;
            dataMovies.setSearch($scope.searchmovies); //updating data in dataMovies
            $rootScope.$emit("movieMethod", {}); //calling method in top movies controller to update view
        });
   
    //when search input changes
    $scope.change = function(text) {

        data.setData($scope.searchText);
        
        $http.get('https://api.themoviedb.org/3/search/movie?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US&query='+$scope.searchText+'&page=1&include_adult=false').
        then(function(response) {
            $scope.searchmovies = response.data.results;
            dataMovies.setSearch($scope.searchmovies); //updating data in dataMovies
                
            $rootScope.$emit("movieMethod", {}); //calling method in top movies controller to update view
        
        });
    };
});