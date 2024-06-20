const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.verifyToken, auditController.createAudit);
router.get('/', authMiddleware.verifyToken, auditController.getAudits);
router.put('/:id', authMiddleware.verifyToken, auditController.updateAudit);
router.delete('/:id', authMiddleware.verifyToken, auditController.deleteAudit);

module.exports = router;
