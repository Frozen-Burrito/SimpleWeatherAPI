const express = require('express');
const { 
  get_daily_weather,
  get_weather_by_date,
  get_weather_by_location,
  add_weather_data
} = require('../controllers/weather-controllers');

const {
  get_locations,
  get_location_by_name,
  add_location
} = require('../controllers/locations-controllers');

const router = express.Router();

// Get all the daily weather data
// Post new weather data
router.route('/weather')
  .get(get_daily_weather)
  .post(add_weather_data);

// Get weather by date
router.get('/weather/:date', get_weather_by_date);

// GET - Retrieves a list of all locations
// POST - Adds a new location
router.route('/locations')
  .get(get_locations)
  .post(add_location);

router.get('/locations/:name', get_location_by_name);

// Get all weather data from a location
router.get('/weather/at/:location', get_weather_by_location);

module.exports = router;