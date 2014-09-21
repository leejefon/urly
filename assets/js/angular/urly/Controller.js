/**
 * UrlyController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'angularValidation', 'angularValidationRule', 'urly/Service'], function (angular) {
	'use strict';

	return angular.module('Urly.controllers', ['Urly.services', 'validation', 'validation.rule'])

		.controller('UrlyController', ['$scope', '$injector', 'urly', function ($scope, $injector, urly) {
			var $validationProvider = $injector.get('$validation');

			$scope.shortenUrl = function () {
				if ($scope.urlyForm.longUrl && $validationProvider.checkValid($scope.urlyForm)) {
					urly.shorten({
						longUrl: $scope.urlyForm.longUrl
					}, function (err, data) {
						console.log(data);
					});
				}
			};
		}]);
});
