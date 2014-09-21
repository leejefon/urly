/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/09/17
 */

module.exports = (function(){

	function index (req, res) {
		return res.view();
	}

	function docs (req, res) {

	}

	function redirect (req, res) {

	}

    return {
        index: index,
		docs: docs,
		redirect: redirect,

        _config: {}
    };
})();
