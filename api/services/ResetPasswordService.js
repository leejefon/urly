/**
 * ResetPasswordService
 *
 * @module      :: Service
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/04/24
 */

var SHA256 = require('sha256');

module.exports = (function(){

    function sendmail (req, res) {
        var email = req.body.email;
        var key = SHA256(email + (new Date().getTime()).toString());
        var extraVars = {};

        User.update({
            email: email
        }, {
            password_reset_key: key
        }).done(function (err, users) {
            if (err) {
                req.flash('error', 'Something went wrong');
                return res.view({
                    key: null
                });
            } else if (users.length === 0) {
                req.flash('error', 'No user with the email found');
                return res.view({
                    key: null
                });
            } else {
                EmailService.sendResetPasswordEmail({
                    email: email,
                    key: key
                }, function (err, response) {
                    if (err) {
                        req.flash('error', 'Something went wrong');
                        return res.view({
                            key: null
                        });
                    } else {
                        req.flash('success', 'E-mail has been sent');
                        return res.view({
                            key: null
                        });
                    }
                });
            }
        });
    }

    function reset (req, res) {
        var key = req.param('key');
        var password = req.body.new_password;
        var newInfo = {
            password: password,
            password_reset_key: null
        };

        // For the invited users
        if (req.body.name) {
            newInfo.name = req.body.name;
        }

        var id = null;
        User.update({
            password_reset_key: key
        }, newInfo, function (err, users) {
            if (err) {
                req.flash('Something went wrong');
                return res.view();
            } else {
                delete users[0].password;
                users[0].security_logs.push({
                    action: 'Reset Password',
                    timestamp: new Date()
                });
                users[0].save(function(){});

                req.flash('success', 'Password reset successfully');
                res.redirect('/user/login');
            }
        });
    }

    return {
        sendmail: sendmail,
        reset: reset
    };

})();
