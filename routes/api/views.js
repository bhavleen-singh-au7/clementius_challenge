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

// @route    DELETE views/:id
// @desc     Delete a view
// @access   Public
router.delete('/:id', async (req, res) => {
  try {
    const view = await User.findById(req.params.id);

    if (!view) {
      return res.status(404).json({ msg: 'Data not found' });
    }

    await view.remove();

    res.json({ msg: 'Data Cleared' });

  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        msg: "Data not found"
      });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;