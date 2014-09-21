/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'user/Service'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['User.services'])

		.controller('UserController', ['$scope', 'users', function ($scope, users) {

			$scope.login = function () {
				$('#loginForm').submit();
			};

			$scope.signup = function () {
				$('#signupForm').submit();
			};
		}]);
});
