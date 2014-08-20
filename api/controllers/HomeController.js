/**
 * HomeController
 *
 * @module      :: Controller
 * @description ::
 * @author      :: Jeff Lee
 * @created     :: 2014/08/19
 */

module.exports = (function(){

	function resume (req, res) {
		return res.view();
	}

    return {
        resume: resume,

        _config: {}
    };
})();
