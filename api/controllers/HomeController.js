/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/09/17
 */

var request = require('request');

module.exports = (function(){

	function index (req, res) {
		return res.view();
	}

	function dashboard (req, res) {
		return res.view({
			layout: 'default/dashboard'
		});
	}

	function redirect (req, res) {
		var shortUrl = req.param.shortUrl;

		return res.redirect('/');
	}

    return {
        index: index,
		dashboard: dashboard,
		redirect: redirect,

        _config: {}
    };
})();
