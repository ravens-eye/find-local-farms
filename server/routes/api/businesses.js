const express = require('express');
const businessController = require('../../controllers/businessController');
const { getAllBusinesses } = businessController;
const router = express.Router();

// Get all business data
router.get('/', async function (req, res) {
  const resp = await getAllBusinesses();
  res.status(200).json(resp);
});

module.exports = router;