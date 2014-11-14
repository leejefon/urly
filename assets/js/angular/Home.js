/**
* TestLegends Build
*
* @author      :: Jeff Lee
* @created     :: 2014/04/28
*/

require.config({
    baseUrl: '/js/angular',
    paths: {
        jquery: '../vendor/jquery/dist/jquery',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
        toastr: '../vendor/toastr/toastr',
        qrcode: '../vendor/qrcode-generator/js/qrcode',

        angular: '../vendor/angular/angular',
        angularCookies: '../vendor/angular-cookies/angular-cookies',
        angularRoute: '../vendor/angular-route/angular-route',
        angularLoadingBar: '../vendor/angular-loading-bar/build/loading-bar',
        angularQRcode: '../vendor/angular-qrcode/qrcode',
        angularValidation: '../vendor/angular-validation/dist/angular-validation',
        angularValidationRule: '../vendor/angular-validation/dist/angular-validation-rule',
    },
    shim: {
        jquery: { exports: '$' },
        bootstrap: ['jquery'],
        toastr: { exports: 'toastr', deps: ['jquery'] },

        angular: { exports: 'angular', deps: ['jquery'] },
        angularCookies: ['angular'],
        angularRoute: ['angular'],
        angularLoadingBar: ['angular'],
        angularQRcode: ['angular', 'qrcode']
    }
});

require([
    'angular',
    'toastr',
    'urly/app',
    'user/app'
], function (angular, toastr, urlyApp, userApp) {
    'use strict';

    angular.element(document).ready(function () {
        angular.bootstrap(document, [
            urlyApp.name,
            userApp.name
        ]);
    });

    toastr.options.positionClass = 'toast-bottom-right';
});
