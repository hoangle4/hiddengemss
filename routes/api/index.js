const router = require('express').Router();
const userControl = require('../../controllers/userControl');
const gemControl = require('../../controllers/gemControl');

//@PUBLIC ROUTES
router.use('/user', userControl);
router.use('/gem', gemControl);

module.exports = router;
