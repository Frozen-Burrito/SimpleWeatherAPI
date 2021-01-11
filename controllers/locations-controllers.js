const { Location } = require('../models');

const get_locations = async (req, res) => {
  try {
    const locations = await Location.find();

    return res.status(200).json({
      count: locations.length,
      data: locations
    });

  } catch (error) {
    return res.status(500).json({
      message: `Unable to retrieve locations: ${error}`
    })
  }
}

const get_location_by_name = async (req, res) => {
  try {
    const location = await Location.findOne({ name: req.params.name });

    return res.status(200).json({
      data: location
    });

  } catch (error) {
    return res.status(500).json({
      message: `Unable to retrieve locations: ${error}`
    })
  }
}

const add_location = async (req, res ) => {
  try {
    req.body.name = req.body.name.replace(/\s+/g, '-').toLowerCase();
    const newLocation = await Location.create(req.body);

    return res.status(200).json({
      data: newLocation
    })
  } catch (error) {
    return res.status(500).json({
      message: `Unable to add location: ${error}`
    })
  }
}

module.exports = {
  get_locations,
  get_location_by_name,
  add_location
}
