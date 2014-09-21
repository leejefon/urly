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
			$routeProvider.when('/user/login', {
				templateUrl: '/js/angular/user/partials/login.html',
				controller: 'UserController'
			});

			$routeProvider.when('/user/reset_password', {
				templateUrl: '/js/angular/user/partials/reset_password.html',
				controller: 'UserController'
			});

			$routeProvider.when('/user/reset_password/:key', {
				templateUrl: '/js/angular/user/partials/reset_password.html',
				controller: 'UserController'
			});

			$routeProvider.when('/user/signup', {
				templateUrl: '/js/angular/user/partials/signup.html',
				controller: 'UserController'
			});

			$routeProvider.when('/user/edit', {
				templateUrl: '/js/angular/user/partials/edit.html',
				controller: 'UserController'
			});

			$locationProvider.html5Mode(true);
		}]);
});
