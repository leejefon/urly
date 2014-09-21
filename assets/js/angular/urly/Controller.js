/**
 * UrlyController
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular', 'urly/Service'], function (angular) {
	'use strict';

	return angular.module('Urly.controllers', ['Urly.services'])

		.controller('UrlyController', ['$scope', 'urly', function ($scope, urly) {
			$scope.shortenUrl = function () {
				
			};
		}]);
});
