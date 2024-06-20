const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

router.post('/', areaController.createArea);
router.get('/', areaController.getAllAreas);
router.get('/:id', areaController.getAreaById);
router.put('/:id', areaController.updateAreaById);
router.delete('/:id', areaController.deleteAreaById);

module.exports = router;