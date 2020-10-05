const mongoose = require('mongoose');
require('dotenv').config();

const MONGOURI = `mongodb+srv://jarasmar:<${process.env.MONGO_PASSWORD}>@arcade.vr4cy.mongodb.net/<${DB_NAME}>?retryWrites=true&w=majority`

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log('Connected to DB');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = InititateMongoServer;