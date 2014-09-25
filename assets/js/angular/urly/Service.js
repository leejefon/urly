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
					UrlyAPI({
						url: '/v1/url',
						method: 'PUT',
						params: {
							fields: 'shortUrl',
							key: UrlyAPI.key
						},
						data: {
							longUrl: params.longUrl,
							userId: $cookies.user ? angular.fromJson($cookies.user).id : null
						}
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response.shortUrl)
						}
					});
				},
				list: function (params, cb) {
					$.extend({
						page: 1,
						per_page: 10
					}, params);

					UrlyAPI({
						url: '/v1/url/history',
						method: 'GET',
						params: {
							fields: '', // default
							page: params.page,
							per_page: params.per_page,
							key: UrlyAPI.key
						},
						headers: {
							Authorization: 'Bearer ' + $cookies.access_token
						}
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response)
						}
					});
				},
				expand: function (params, cb) {
					UrlyAPI({
						url: '/v1/url',
						method: 'GET',
						params: {
							fields: 'longUrl',
							shortUrl: params.shortUrl,
							key: UrlyAPI.key
						}
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response.longUrl)
						}
					});
				},
				analytics: function (cb) {
					UrlyAPI({
						url: '/v1/url',
						method: 'GET',
						params: {
							fields: ['longUrl', 'analytics'].join(','),
							shortUrl: params.shortUrl,
							key: UrlyAPI.key
						}
					}).success(function (response) {
						if (response.error) {
							cb(response.error);
						} else {
							cb(null, response)
						}
					});
				}
			};
		}]);
});
