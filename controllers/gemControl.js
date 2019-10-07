const models = require('../models');
const auth = require('../middleware/auth');
const router = require('express').Router();

//@PRIVATE ROUTE
//@ADD GEM
//POST  api/gem
router.post('/', auth, async (req, resp) => {
  try {
    const newGem = {
      gemCoord: req.body.gemCoord,
      gemName: req.body.gemName,
      gemDesc: req.body.gemDesc,
      gemStory: req.body.gemStory,
      gemPhoto: req.body.gemPhoto,
      createdBy: req.user
    };
    const gem = await new models.Gem(newGem).save();
    resp.json(gem);
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ msg: 'SERVER ERROR' });
  }
});

//@PUBLIC ROUTE
//@GET ALL GEM
//GET  api/gem
router.get('/', async (req, resp) => {
  try {
    const gem = await models.Gem.find({}).populate('createdBy', 'name');
    resp.json(gem);
  } catch (error) {
    console.error(error.message);
    resp.status(500).json({ msg: 'SERVER ERROR' });
  }
});

module.exports = router;
