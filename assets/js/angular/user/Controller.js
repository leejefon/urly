/**
 * UserController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'angularValidation', 'angularValidationRule', 'user/Service'], function (angular) {
	'use strict';

	return angular.module('User.controllers', ['User.services', 'validation', 'validation.rule'])

		.controller('UserController', ['$scope', '$injector', 'users', function ($scope, $injector, users) {
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
		}]);
});
