require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/database');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 600 * 1000, 
    max: 100,
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', apiRoutes);

// Login
app.post('/api/login', (req, res) => {
    const {username, password} =req.body;
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).json({error: 'Invalid credentials'});
    }
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'something went wrong'});
});

// start server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});