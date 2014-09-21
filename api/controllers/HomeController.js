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
		return res.view('home/index', {
			layout: 'layouts/dashboard'
		});
	}

	function redirect (req, res) {
		var shortUrl = req.param('shortUrl');

		request({
			url: process.env.URLY_API_URL + '/v1/url',
			method: 'GET',
			json: true,
			qs: {
				shortUrl: shortUrl,
				key: process.env.URLY_API_KEY,
			}
		}, function (error, response, body) {
			if (error || !body.longUrl) {
				return res.redirect('/');
			}
			return res.redirect(body.longUrl);
		});

	}

    return {
        index: index,
		dashboard: dashboard,
		redirect: redirect,

        _config: {}
    };
})();
