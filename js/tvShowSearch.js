//tv show search data
myApp.controller('tvShowSearch', function($scope, $http, dataShows, data, $rootScope) {
    
    $scope.searchshows = [];
    $scope.searchText = data.getData();
    
    $http.get('https://api.themoviedb.org/3/search/tv?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US&query='+$scope.searchText+'&page=1').
        then(function(response) {
            $scope.searchshows = response.data.results;
            dataShows.setSearch($scope.searchshows); //updating data in dataShows
            $rootScope.$emit("tvShowMethod", {}); //calling method in top shows controller to update view
        });
    
    //when search input changes
    $scope.change = function(text) {
            data.setData($scope.searchText);
        
            $http.get('https://api.themoviedb.org/3/search/tv?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US&query='+$scope.searchText+'&page=1').
        then(function(response) {
            $scope.searchshows = response.data.results;
            dataShows.setSearch($scope.searchshows);//updating data in dataShows
                
            $rootScope.$emit("tvShowMethod", {}); //calling method in top shows controller to update view

        });    
    };
});