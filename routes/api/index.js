const router = require('express').Router();
const userControl = require('../../controllers/userControl');

//@PUBLIC ROUTES
router.use('/user', userControl);

module.exports = router;
