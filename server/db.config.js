const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const mongoURI = process.env.MONGOURI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Cluster0',
});

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  trips: [
    {
      date: {type: String},
      time: {type: String},
      odo: {type: Number},
      start: {type: String},
      end: {type: String},
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
