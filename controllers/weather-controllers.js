const { DailyWeather, Location } = require('../models');

const get_daily_weather = async ( req, res ) => {
  try {
    const dailyWeatherData = await DailyWeather.find();

    return res.status(200).json({
      count: dailyWeatherData.length,
      data: dailyWeatherData
    });

  } catch (error) {
    return res.status(500).json({
      message: 'Unable to retrieve weather data at the moment.'
    });
  }
}

const get_weather_by_date = async ( req, res ) => {
  try {
    const weatherForDate = await DailyWeather.find({ date: req.params.date });

    return res.status(200).json({
      count: weatherForDate.count,
      data: weatherForDate
    });

  } catch (error) {
    return res.status(500).json({
      message: `An error occurred while getting weather: ${error}`
    });
  }
}

const get_weather_by_location = async (req, res) => {
  try {
    const location = await Location.findOne({ name: req.params.location });

    if (location === null) {
      return res.status(500).json({
        message: 'Location does not exist in database.'
      });
    }

    const weatherInLocation = await DailyWeather.find({ location: location._id});

    return res.status(200).json({
      location: location.name,
      count: weatherInLocation.count || 0,
      data: weatherInLocation
    });

  } catch (error) {
    return res.status(500).json({
      message: `An error occurred while getting the weather: ${error}`
    });
  }
}

const add_weather_data = async ( req, res ) => {
  try {
    const newWeatherData = await DailyWeather.create(req.body);

    return res.status(201).json({
      data: newWeatherData
    });

  } catch (error) {
    
    return res.status(500).json({
      message: `An error occured while adding the data: ${error}`
    });
  }
}

module.exports = {
  get_daily_weather,
  get_weather_by_date,
  get_weather_by_location,
  add_weather_data
}