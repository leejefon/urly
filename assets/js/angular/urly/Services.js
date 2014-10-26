/**
 * UrlyService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/07/06
 */

define(['angular', 'angularCookies'], function (angular) {
	'use strict';

	return angular.module('Urly.services', ['ngCookies'])

		.constant('UrlyURL', {
			api: 'https://leejefon.local:1339',
			app: 'https://leejefon.local:1338'

			// api: 'https://api.urly.cc',
			// app: 'https://urly.cc'
		})

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
							cb(null, response.shortUrl);
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
							cb(null, response);
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
							cb(null, response.longUrl);
						}
					});
				},
				analytics: function (params, cb) {
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
							cb(null, response);
						}
					});
				}
			};
		}])

		.factory('UrlyAPI', ['$http', '$cookies', 'UrlyURL', function ($http, $cookies, UrlyURL) {

			$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.access_token;

			function UrlyAPI (params) {
				if (params) {
					params.url = UrlyURL.api + params.url;
					return $http(params).error(_errorHandler);
				}
			}

			UrlyAPI.key = '541e80dc2b998668c20003ea';

			UrlyAPI.get = function (url, config) {
				return $http.get(UrlyURL.api + url, config).error(_errorHandler);
			};

			UrlyAPI.post = function (url, data, config) {
				return $http.post(UrlyURL.api + url, data, config).error(_errorHandler);
			};

			UrlyAPI.put = function (url, data, config) {
				return $http.put(UrlyURL.api + url, data, config).error(_errorHandler);
			};

			UrlyAPI.delete = function (url, config) {
				return $http.delete(UrlyURL.api + url, config).error(_errorHandler);
			};

			UrlyAPI.jsonp = function (url, config) {
				return $http.jsonp(UrlyURL.api + url, config);
			};

			UrlyAPI.head = function (url, config) {
				return $http.head(UrlyURL.api + url, config);
			};

			function _errorHandler (data, status) {
				if (status === 401) {
					//window.location.href = '/login';
					console.log('401 error');
				}
			}

			return UrlyAPI;
		}]);
});
