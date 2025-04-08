const Book = require('../../models/Book');

exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json({
            message: 'Book created successfully',
            book: newBook
        }); 
    } catch (err) {
        res.status(500).json({
            error: 'Error creating book'
        });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const books = await Book.find().skip(skip).limit(limit);
        const total = await Book.countDocuments();

        res.status(200).json({
            books,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalBooks: total
        });
    } catch (err) {
        res.status(500).json({error: 'Error fetching books'});
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({error: 'Book not found'});
        res.json(book);
    } catch (err) {
        res.status(500).json({error: 'Error fetching book'});
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{ new: true, runValidators:true});
        if (!book) return res.status(404).json({error: 'Book not found'});
        res.json(book);
    } catch (err) {
        res.status(500).json({error: 'Error updating book'});
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({error: 'Book not found'});
        res.status(204).send();
    } catch (err) {
        res.status(500).json({error: 'Error deleting book'});
    }
};