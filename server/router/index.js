const {Router} = require('express');
const {getSignUpForm} = require('../controllers');

// eslint-disable-next-line new-cap
const router = Router();

router.get('/signup', getSignUpForm);


module.exports = router;
