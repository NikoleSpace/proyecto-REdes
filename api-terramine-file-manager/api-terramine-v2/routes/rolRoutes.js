// routes/rolRoutes.js
const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');
const authMiddleware = require('../middleware/authMiddleware'); // Importa el middleware de autenticación

router.post('/',authMiddleware, rolController.createRol);
router.get('/',authMiddleware, rolController.getAllRoles);
router.get('/:id', authMiddleware ,rolController.getRolById);
router.put('/:id',authMiddleware, rolController.updateRol);
router.delete('/:id', authMiddleware,rolController.deleteRol);

module.exports = router;
