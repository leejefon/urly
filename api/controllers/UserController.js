/**
 * UserController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/09/18
 */

var Passport = require('passport');

module.exports = (function(){

    function post_login (req, res) {
        var sixHours = 6 * 60 * 60 * 1000;

        res.cookie('access_token', req.user.access_token, { maxAge: sixHours });
        res.cookie('user', JSON.stringify({
            id: req.user.id,
            email: req.user.email
        }), { maxAge: sixHours });

        res.redirect('/dashboard'); // /user/login Handles the after login random stuff
    }

    function logout (req, res) {
        req.logout();
        res.clearCookie('user');
        return res.redirect('/');
    }

    function reset_password (req, res) {
        if (req.session.authenticated) {
            res.redirect('/');
        }

        if (_.isEmpty(req.param('key'))) {
            ResetPasswordService.sendmail(req, res);
        } else {
            ResetPasswordService.reset(req, res);
        }
    }

    function get (req, res) {
        // TODO: need to get from real user db, for password reset
        return res.json({
            user: req.user[0]
        });
    }

    function add (req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).exec(function (err, user) {
            if (err) {
                console.log(err);
                req.flash('error', err);
                return res.redirect('/signup');
            } else {
                req.flash('success', 'You have successfully registered');
                return res.redirect('/login');
            }
        });
    }

    function update (req, res) {
        var user = req.user[0];
        var updated = {};

        if (req.body.email !== user.email) { updated.email = req.body.email; }
        if (!_.isEmpty(req.body.password)) { updated.password = req.body.password; }

        User.update({ id: req.user[0].id }, updated).exec(function (err, user) {
            if (err) {
                return console.log(err);
            } else {
                return res.redirect('/dashboard');
            }
        });
    }

    return {
        login: Passport.authenticate('local', {
            successReturnToOrRedirect: '/user/post_login',
            failureRedirect: '/login',
            failureFlash: 'Wrong username or password.'
        }),
        post_login: post_login,
        logout: logout,
        reset_password: reset_password,
        get: get,
        add: add,
        update: update,

        _config: {}
    };
})();
