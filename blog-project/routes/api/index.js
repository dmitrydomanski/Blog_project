const express = require('express');
const router = express.Router();

router.use('/articles', require('./articles'));
router.use('/users', require('./users'));

module.exports = router;