const express = require('express');
const router = express.Router();
const { getChecklistResults } = require('../controllers/checklistController');

router.get('/checklist', getChecklistResults);

module.exports = router;
