//controlling what data will be shown on tw shows home
//top rated shows or search data
myApp.controller('topshowsController', ['$scope', 'tvshows','dataShows', '$rootScope', function($scope, tvshows, dataShows, $rootScope) {
    $scope.tvshows = [];
    
    if($scope.tvshows.length < 1){
        tvshows.success(function(data) {
          $scope.tvshows=data.results;
      
        });
    }
    
    //gets called when seatch input changes to update view
    $rootScope.$on("tvShowMethod", function(){       
        $scope.tvshows = dataShows.getSearch();
        if($scope.tvshows.length < 1){
            tvshows.success(function(data) {
  
                $scope.tvshows=data.results;
      
            });
        }
    });
}]);