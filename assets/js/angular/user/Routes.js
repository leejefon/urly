/**
* UserRoutes
*
* @author      :: Jeff Lee
* @created     :: 2014/09/20
*/

define(['angular', 'angularRoute'], function(angular) {
	'use strict';

	return angular.module('User.routes', ['ngRoute'])

		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
			$routeProvider.when('/login', {
				templateUrl: '/js/angular/user/partials/login.html',
				controller: 'UserController'
			});

			$routeProvider.when('/signup', {
				templateUrl: '/js/angular/user/partials/signup.html',
				controller: 'UserController'
			});

			$routeProvider.when('/reset_password', {
				templateUrl: '/js/angular/user/partials/reset_password.html',
				controller: 'UserController'
			});

			$routeProvider.when('/reset_password/:key', {
				templateUrl: '/js/angular/user/partials/reset_password.html',
				controller: 'UserController'
			});

			$routeProvider.when('/account', {
				templateUrl: '/js/angular/user/partials/index.html',
				controller: 'UserController'
			});

			$routeProvider.when('/account/edit', {
				templateUrl: '/js/angular/user/partials/edit.html',
				controller: 'UserController'
			});

			$locationProvider.html5Mode(true);
		}]);
});
