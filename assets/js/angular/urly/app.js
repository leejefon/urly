/**
 * Urly App
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define([
	'angular',
	'angularLoadingBar',
	'urly/Controller',
    'urly/Routes'
], function (angular) {
	'use strict';

	return angular.module('Urly', [
		'chieffancypants.loadingBar',
		'Urly.controllers',
        'Urly.routes'
	]);
});
