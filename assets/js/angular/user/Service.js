/**
 * UserService
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('User.services', [])

		.factory('users', ['$http', function ($http) {
			return {
				getUser: function (cb) {
					$http.get('/user').success(function (response) {
						if (response.status === 'OK') {
							cb(null, response.data);
						} else {
							cb(response.error);
						}
					});
				}
			};
		}]);
});
