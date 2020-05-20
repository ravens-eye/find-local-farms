const express = require('express');
const businessController = require('../../controllers/businessController');
const { getAllBusinesses } = businessController;
const router = express.Router();

// Get all business data
router.get('/', async function (req, res, next) {
  const { ok, data, error } = await getAllBusinesses();
  ok && res.status(200).json(data);
  !ok && next(error);
});

module.exports = router;
