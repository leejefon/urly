/**
 * ApiKey
 *
 * @module      :: Model
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/09/19
 */

module.exports = (function(){

    var tableName = 'api_keys';

    var attributes = {
        domain: {
            type: 'json',
            required: true
        },
        call_history: {
            type: 'array',
            defaultsTo: []
        }
    };

    if (process.env.NODE_ENV === 'development') {
        tableName += '_test';
    }

    return {
        tableName: tableName,
        attributes: attributes
    };
})();
