const express = require('express');
const cors = require('cors');
const checklistRoutes = require('./routes/checklistRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', checklistRoutes);

module.exports = app;
