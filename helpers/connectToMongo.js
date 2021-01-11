const mongoose = require('mongoose');

const connectToMongo = async ( uri ) => {
  try {
    const response = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`API connected to MongoDB on ${response.connection.host}`);
  } catch (error) {
    console.log('An error ocurred while attempting to connect to MongoDB: ', error);
  }
}

module.exports = connectToMongo;