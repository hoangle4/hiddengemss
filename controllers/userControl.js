const models = require('../models');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

//@PUBLIC ROUTE
//@REGISTER USER
//POST  api/user
router.post('/', async (req, resp) => {
  const { name, email, password, sub } = req.body;
  try {
    let user = await models.User.findOne({ email });

    if (user) return resp.status(400).json({ msg: 'User Already Exist' });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    user = await new models.User({ name, email, password: hash, sub }).save();

    jwt.sign({ user: user._id }, config.get('jwtSecret'), function(
      error,
      token
    ) {
      if (error) throw new Error(error);
      resp.json(token);
    });
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ msg: 'SERVER ERROR' });
  }
});

module.exports = router;
