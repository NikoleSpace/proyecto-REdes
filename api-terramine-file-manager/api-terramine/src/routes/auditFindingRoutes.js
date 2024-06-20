const express = require('express');
const router = express.Router();
const auditFindingController = require('../controllers/auditFindingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.verifyToken, auditFindingController.createAuditFinding);
router.get('/', authMiddleware.verifyToken, auditFindingController.getAuditFindings);
router.put('/:id', authMiddleware.verifyToken, auditFindingController.updateAuditFinding);
router.delete('/:id', authMiddleware.verifyToken, auditFindingController.deleteAuditFinding);

module.exports = router;
