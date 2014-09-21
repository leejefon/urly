/**
 * UrlyService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'common/services/UrlyAPI'], function (angular) {
	'use strict';

	return angular.module('Urly.services', ['Common.services'])

		.factory('urly', ['UrlyAPI', function (UrlyAPI) {
			return {
				shorten: function (params, cb) {
					cb(null, params.longUrl);
				},
				expand: function (params, cb) {

				},
				analytics: function (cb) {

				}
			};
		}]);
});
