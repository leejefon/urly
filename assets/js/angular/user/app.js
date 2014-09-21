/**
 * User App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define([
	'angular',
	'angularLoadingBar',
	'user/Controller',
    'user/Routes'
], function (angular) {
	'use strict';

	return angular.module('User', [
		'chieffancypants.loadingBar',
		'User.controllers',
        'User.routes'
	]);
});
