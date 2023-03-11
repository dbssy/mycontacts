const { Router } = require('express');

const router = Router();

const contacts = require('./contacts');
const categories = require('./categories');

router.use('/contacts', contacts);
router.use('/categories', categories);

module.exports = router;
