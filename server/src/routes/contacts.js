const { Router } = require('express');

const router = Router();

const ContactController = require('../app/controllers/ContactController');

router.get('/', ContactController.index);
router.get('/:id', ContactController.show);

router.post('/', ContactController.store);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.delete);

module.exports = router;
