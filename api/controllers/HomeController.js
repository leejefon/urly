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

	function docs (req, res) {
		return res.view('home/index', {
			layout: 'layouts/docs'
		});
	}

	function dashboard (req, res) {
		return res.view('home/index', {
			layout: 'layouts/dashboard'
		});
	}

	function redirect (req, res) {
		var shortUrl = req.param('shortUrl');

		// Hack: temporarily handles the request to favicon, need to figure out how to do favicon later
		if (shortUrl === 'favicon.ico') {
			return res.json({});
		}

		request({
			url: process.env.URLY_API_URL + '/v1/url',
			method: 'GET',
			json: true,
			headers: {
				'User-Agent': req.get('user-agent'),
				'Referer': req.get('referer') || "",
				'Remote-Address': req.connection.remoteAddress
			},
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
		docs: docs,
		dashboard: dashboard,
		redirect: redirect,

        _config: {}
    };
})();
