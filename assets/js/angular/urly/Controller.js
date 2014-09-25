/**
 * UrlyController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'angularValidation', 'angularValidationRule', 'urly/Service', 'common/services/UrlyURL'], function (angular) {
	'use strict';

	return angular.module('Urly.controllers', ['Urly.services', 'Common.services', 'validation', 'validation.rule'])

		.controller('UrlyController', ['$scope', '$location', '$injector', 'urly', 'UrlyURL', function ($scope, $location, $injector, urly, UrlyURL) {
			var $validationProvider = $injector.get('$validation');

			$scope.baseUrl = UrlyURL.app;

			$scope.shortenUrl = function () {
				if ($scope.urlyForm.longUrl && $validationProvider.checkValid($scope.urlyForm)) {
					urly.shorten({
						longUrl: $scope.urlyForm.longUrl
					}, function (err, shortUrl) {
						$scope.shortUrl = shortUrl;
						$('#shortenedResult').removeClass('hide');
					});
				}
			};

			$scope.init = function () {
				if ($location.url() === '/dashboard') {
					urly.list({
						page: 1,
						per_page: 10
					}, function (err, data) {
						console.log(data);
						$scope.urls = data;
					});
				}
			};

			$scope.init();
		}]);
});
