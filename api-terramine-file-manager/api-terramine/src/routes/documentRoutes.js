// routes/documentRoutes.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.post('/', documentController.createDocument);
router.get('/', documentController.getAllDocuments);
router.get('/:id', documentController.getDocumentById);
router.put('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);

router.post('/user/:id', documentController.createDocumentByUser);
router.get('/user/:id', documentController.getDocumentsByUser);

module.exports = router;
