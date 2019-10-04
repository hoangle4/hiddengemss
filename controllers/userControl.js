const models = require('../models');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

//@PUBLIC ROUTE
//@REGISTER USER
//POST  api/user
router.post('/', (req, resp) => {
  resp.json(req.body);
});

module.exports = router;
