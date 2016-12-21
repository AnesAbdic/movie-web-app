myApp.controller('oneMovie', function($scope, $stateParams, $http) {
    
    $scope.id = $stateParams.id; 
    $http.get('https://api.themoviedb.org/3/movie/'+$scope.id+'?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US').
        then(function(response) {
            $scope.details = response.data;
        });

});

myApp.controller('oneShow', function($scope, $stateParams, $http) {
    
    $scope.id = $stateParams.id; 
    $http.get('https://api.themoviedb.org/3/tv/'+$scope.id+'?api_key=2fd0295fe9dee600fbfe625d326f9719&language=en-US').
        then(function(response) {
            $scope.details = response.data;
        });

});