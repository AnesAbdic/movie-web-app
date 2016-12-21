var myApp =angular.module("movieApp",['ui.router', 'ui.bootstrap']);

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
