const express = require('express');
const router = express.Router();

router.use('/excel', require('./excel'))

module.exports = router;
