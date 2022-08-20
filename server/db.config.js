const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//************** Building Out A Basic Request to the DataBase on one page before building a structure */

const mongoURI = 'mongodb+srv://TensionCoding:FfhH6pukL6lau30x@cluster0.2jgdw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Cluster0'
});

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  trips: [{
    date: {type: String},
    time: {type: String},
    odo: {type: Number},
    start: {type: String},
    end: {type: String}
  }]
});

// async function userCreator () {
//   const user = new User({})

// }
const User = mongoose.model('User', userSchema);




module.exports = User;
