/**
* UrlyRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/09/20
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('Urly.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl: '/js/angular/urly/partials/index.html',
				controller: 'UrlyController',
			});

			$routeProvider.when('/docs', {
				templateUrl: '/js/angular/urly/partials/docs.html',
				controller: 'UrlyController'
			});

			$routeProvider.when('/dashboard', {
				templateUrl: '/js/angular/urly/partials/dashboard.html',
				controller: 'UrlyController'
			});

			$routeProvider.when('/stats/:shortUrl', {
				templateUrl: '/js/angular/urly/partials/stats.html',
				controller: 'StatsController'
			});

			$locationProvider.html5Mode(true);
		}]);
});
