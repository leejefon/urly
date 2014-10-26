/**
 * UrlyController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'angularValidation', 'angularValidationRule', 'urly/Services'], function (angular) {
	'use strict';

	return angular.module('Urly.controllers', ['Urly.services', 'validation', 'validation.rule'])

		.controller('UrlyController', ['$scope', '$location', '$routeParams', '$injector', 'UrlyURL', 'urly', function ($scope, $location, $routeParams, $injector, UrlyURL, urly) {
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
					$('#nav-dashboard').addClass('active');
					$('#nav-account').removeClass('active');

					urly.list({
						page: 1,
						per_page: 10
					}, function (err, data) {
						$scope.urls = data;
					});
				}
			};

			$scope.init();
		}])

		.controller('StatsController', ['$scope', '$routeParams', 'UrlyURL', 'urly', function ($scope, $routeParams, UrlyURL, urly) {

			$scope.baseUrl = UrlyURL.app;

			$scope.init = function () {
				urly.analytics({
					shortUrl: $routeParams.shortUrl
				}, function (err, data) {
					$scope.analytics = data;
				});
			};

			$scope.init();
		}]);
});
