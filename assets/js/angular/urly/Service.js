/**
 * UrlyService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'angularCookies', 'common/services/UrlyAPI'], function (angular) {
	'use strict';

	return angular.module('Urly.services', ['Common.services', 'ngCookies'])

		.factory('urly', ['UrlyAPI', '$cookies', function (UrlyAPI, $cookies) {
			return {
				shorten: function (params, cb) {
					UrlyAPI.put('/v1/url?fields=shortUrl&key=' + UrlyAPI.key, {
						longUrl: params.longUrl,
						userId: $cookies.user ? angular.fromJson($cookies.user).id : null
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response.shortUrl)
						}
					});
				},
				expand: function (params, cb) {
					UrlyAPI.get('/v1/url?fields=longUrl&key=' + UrlyAPI.key, {
						longUrl: params.longUrl
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response.longUrl)
						}
					});
				},
				analytics: function (cb) {

				}
			};
		}]);
});
