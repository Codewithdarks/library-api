const express = require('express');
const router = express.Router();
const BookController = require('../app/Http/controllers/BookConrtoller');
const { validateBook, validateBookUpdate } = require('../app/Http/middleware/Validate');
const authenticateToken = require('../app/Http/middleware/Auth');

router.post('/books', authenticateToken,validateBook, BookController.createBook);
router.get('/books', BookController.getAllBooks);
router.get('/books/:id', BookController.getBookById);
router.put('/books/:id', authenticateToken, validateBookUpdate, BookController.updateBook);
router.delete('/books/:id', authenticateToken, BookController.deleteBook);

module.exports = router;