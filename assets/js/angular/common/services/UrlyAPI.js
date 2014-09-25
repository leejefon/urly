/**
 * UrlyAPI Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['common/services', 'common/services/UrlyURL'], function (commonServices) {
    'use strict';

    return commonServices

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
