const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route    GET /views
// @desc     Get all views
// @access   Public
router.get('/', async (req, res) => {
  try {
    const views = await User.find().sort({ date: -1 });
    res.json(views);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;