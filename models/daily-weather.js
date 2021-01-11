const { Schema, model } = require('mongoose');

const DailyWeatherSchema = new Schema({

  date: {
    type: Date,
    required: true
  },

  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },

  weatherCondition: {
    type: String,
    default: 'Sunny',
    enum: [ 'Sunny', 'Partially Cloudy', 'Cloudy', 'Rain', 'Snow', 'Fog', 'Overcast']
  },

  sunrise: {
    type: Date
  },

  sunset: {
    type: Date
  },

  averageTemperature: {
    type: Number,
    required: true
  },

  humidity: {
    type: Number,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('DailyWeather', DailyWeatherSchema);