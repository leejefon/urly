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

    function logout (req, res) {
        req.logout();
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
                return res.redirect('/user/signup');
            } else {
                req.flash('success', 'You have successfully registered');
                return res.redirect('/user/login');
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
            successReturnToOrRedirect: '/dashboard',
            failureRedirect: '/user/login',
            failureFlash: 'Wrong username or password.'
        }),
        logout: logout,
        reset_password: reset_password,
        get: get,
        add: add,
        update: update,

        _config: {}
    };
})();
