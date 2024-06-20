const express = require('express');
const router = express.Router();
const correctiveActionController = require('../controllers/correctiveActionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.verifyToken, correctiveActionController.createCorrectiveAction);
router.get('/', authMiddleware.verifyToken, correctiveActionController.getCorrectiveActions);
router.put('/:id', authMiddleware.verifyToken, correctiveActionController.updateCorrectiveAction);
router.delete('/:id', authMiddleware.verifyToken, correctiveActionController.deleteCorrectiveAction);

module.exports = router;
