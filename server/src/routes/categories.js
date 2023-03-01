const { Router } = require('express');

const router = Router();

const CategoryController = require('../app/controllers/CategoryController');

router.get('/', CategoryController.index);
router.get('/:id', CategoryController.show);

router.post('/', CategoryController.store);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);

module.exports = router;
