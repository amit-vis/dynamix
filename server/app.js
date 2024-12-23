const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const checklistRoutes = require('./routes/checklistRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', checklistRoutes);

module.exports = app;
