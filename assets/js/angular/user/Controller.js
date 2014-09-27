/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'angularValidation', 'angularValidationRule', 'user/Service'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['User.services', 'validation', 'validation.rule'])

		.controller('UserController', ['$scope', '$location', '$injector', 'users', function ($scope, $location, $injector, users) {
			var $validationProvider = $injector.get('$validation');

			$scope.login = function () {
				if ($scope.loginForm.email && $validationProvider.checkValid($scope.loginForm)) {
					$('form[name=loginForm]').submit();
				}
			};

			$scope.signup = function () {
				if ($scope.signupForm.email && $validationProvider.checkValid($scope.signupForm)) {
					$('form[name=signupForm]').submit();
				}
			};

			$scope.init = function () {
				if ($location.url().indexOf('/account') !== -1) {
					$('#nav-account').addClass('active');
					$('#nav-dashboard').removeClass('active');

					users.getUser(function (err, data) {
						$scope.user = data;
					});
				}
			};

			$scope.init();
		}]);
});
