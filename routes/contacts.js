const express = require('express');

const router = express.Router();

// @router  GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
  return res.send('Get all contacts');
});

// @router  POST api/contacts
// @desc    Add contact
// @access  Private
router.post('/', (req, res) => {
  return res.send('Add contact');
});

// @router  PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  return res.send('Update contact');
});

// @router  DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  return res.send('Delete contact');
});

module.exports = router;