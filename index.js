const { urlencoded } = require('express');
const express = require('express');

const connectToMongo = require('./helpers/connectToMongo');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/weather-api';

const apiEndpoints = require('./routes/api-endpoints');

const app = express();

connectToMongo(MONGO_URI);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API endpoints
app.use('/api', apiEndpoints);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));