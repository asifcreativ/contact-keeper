const express = require('express');

const router = express.Router();

// @router  GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  return res.send('Get logged in user');
});

// @router  POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/', (req, res) => {
  return res.send('Log in user');
});

module.exports = router;
