/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    'GET /'                         : 'HomeController.index',
    'GET /docs'                     : 'HomeController.docs',
    'GET /dashboard'                : 'HomeController.dashboard',
    'GET /stats/:shortUrl'          : 'HomeController.dashboard',
    'GET /account'                  : 'HomeController.dashboard',
    'GET /account/edit'             : 'HomeController.dashboard',
    'GET /login'                    : 'HomeController.index',
    'GET /signup'                   : 'HomeController.index',
    'GET /reset_password'           : 'HomeController.index',
    'GET /reset_password/:key'      : 'HomeController.index',

    'GET  /user'                    : 'UserController.get',
    'POST /user/login'              : 'UserController.login',
    'GET  /user/post_login'         : 'UserController.post_login',
    'GET  /user/logout'             : 'UserController.logout',
    'POST /user/add'                : 'UserController.add',
    'POST /user/update'             : 'UserController.update',
    'POST /user/reset_password'     : 'UserController.reset_password',
    'POST /user/reset_password/:key': 'UserController.reset_password',

    'GET  /oauth/authorize'         : 'OAuthController.authorize',
    'POST /oauth/decision'          : 'OAuthController.decision',
    'GET  /oauth/token'             : 'OAuthController.token',

    'GET /:shortUrl'                : 'HomeController.redirect'

};
