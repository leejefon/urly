/**
 * OAuthController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/04/19
 */

module.exports = (function(){

    function authorize (req, res) {
        return res.view({
            transactionID: req.oauth2.transactionID,
            user: req.user,
            client: req.oauth2.client
        });
    }

    function decision (req, res) {

    }

    function token (req, res) {

    }

    return {
        authorize: authorize,
        decision: decision,
        token: token,

        _config: {
            blueprints: {
                actions: true
            }
        }
    };
})();
