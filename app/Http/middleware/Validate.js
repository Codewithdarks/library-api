const Joi = require('joi');

const bookSchema = Joi.object({
    title: Joi.string().min(1).max(255).required(),
    author: Joi.string().min(1).max(255).required(),
    year: Joi.number().min(0).max(new Date().getFullYear()).required(),
    genre: Joi.string().min(1).max(100).required()
});

const bookUpdateSchema = Joi.object({
    title: Joi.string().min(1).max(255),
    author: Joi.string().min(1).max(255),
    year: Joi.number().min(0).max(new Date().getFullYear()),
    genre: Joi.string().min(1).max(100)
}).min(1);

exports.validateBook = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};

exports.validateBookUpdate = (req, res, next) => {
    const { error } = bookUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    next();
};