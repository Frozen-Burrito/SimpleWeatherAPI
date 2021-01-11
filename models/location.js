const { Schema, model } = require('mongoose');

const LocationSchema = new Schema({
  name: String,
  coordinates: String
})

module.exports = model('Location', LocationSchema);