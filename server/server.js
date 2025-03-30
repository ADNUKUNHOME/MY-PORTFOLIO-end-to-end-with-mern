const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/auth/authRoutes');


const App = express();
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch((error) => console.log(error));

App.use(cookieparser());
App.use(express.json());

App.use(
    cors({
        origin: process.env.CLIENT_BASE_URL,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
);

//API Endpoints

App.use('/api/auth', authRouter);

App.listen(PORT, () => console.log(
    `Server is running on Port ${PORT}`
));