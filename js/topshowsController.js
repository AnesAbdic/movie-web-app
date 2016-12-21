myApp.controller('topshowsController', ['$scope', 'tvshows','dataShows', '$rootScope', function($scope, tvshows, dataShows, $rootScope) {
    $scope.tvshows = [];
    
    if($scope.tvshows.length < 1){
        tvshows.success(function(data) {
          $scope.tvshows=data.results;
      
        });
    }
    
    $rootScope.$on("tvShowMethod", function(){       
        $scope.tvshows = dataShows.getSearch();
        if($scope.tvshows.length < 1){
            tvshows.success(function(data) {
  
                $scope.tvshows=data.results;
      
            });
        }
    });
}]);