/**
 * UrlyURL Service
 *
 * @author      :: Jeff Lee
 * @created     :: 2014/09/20
 */

define(['common/services'], function (commonServices) {
    'use strict';

    return commonServices

        .constant('UrlyURL', {
            // api: 'https://leejefon.local:1339',
            // app: 'https://leejefon.local:1337',

            api: 'https://api.urly.cc',
            app: 'https://www.urly.cc',
        });
});