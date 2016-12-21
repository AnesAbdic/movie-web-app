var myApp =angular.module("movieApp",['ui.router', 'ui.bootstrap']);

//define view change based on different states
myApp.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/movies');
$stateProvider
        .state('movies', {
            url: '/movies',
            templateUrl: 'views/topmovies.html',
            controller:'topmoviesController'
        })
        .state('tvshows', {
            url: '/tvshows',
            templateUrl: 'views/topshows.html',
            controller:'topshowsController'
        })
        .state('show', {
            url: '/show/:id',
            templateUrl: 'views/oneshow.html',
            controller:'oneShow'
        })
        .state('movie', {
            url: '/movie/:id', 
            templateUrl: 'views/onemovie.html', 
            controller: 'oneMovie'
        });
});

//for keeping search data when we change between movie home and tv show home view
myApp.factory('data', function () {

    var data = '';

    return {
        getData: function () {
            return data;
        },
        setData: function (update) {
            data = update;
        }
    };
});
//for keeping search data when we change between movie home and tv show home view
myApp.factory('dataMovies', function () {

   
    var search = [];

    return { 
        getSearch: function () {
            return search;
        },
        setSearch: function (upd) {
            search = upd;
        }
    };
});
//for keeping search data when we change between movie home and tv show home view
myApp.factory('dataShows', function () {

    var search = [];

    return {
        getSearch: function () {
            return search;
        },
        setSearch: function (upd) {
            search = upd;
        }
    };
});
