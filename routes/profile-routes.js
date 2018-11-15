const router = require('express').Router();

const authCheck = (req, res, next) => {
	if(!req.user){
		res.redirect('/auth/login');
	}{
		next();
	}
};

router.get('/', authCheck, (req, res) => {
    // res.render('profile');
    res.render('profile', {
    	user: req.user
    });
});

module.exports = router;
