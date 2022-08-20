const models = require('../db.config');

const mongoose = require('mongoose');
const dbController = {};

dbController.createUser = (req, res, next) => {
  console.log('in Create User middleware');
  console.log('req.body-->', req.body)
  const { username, password } = req.body;
    //update this response for error handling
    //I dont like this catch at all
  if(!username || !password) return res.send({ express: 'ENTER VALID CREDENTIALS'})
    models.create({ username, password}, (err, user) => {
      if (err) {
        //I dont like this either
        return res.send({ express: 'ERROR OCCURED IN CREATE'})
      } else {
        //user.markModified('trips');
        //user.save();
        //console.log('user.username', user.username, 'user.trips-->', user.trips);
        //THIS NEEDS TO BE ADDRESSED !!!!!!!!!!
        res.locals.username = user.username;
        //console.log('response.locals.express object in server.js POST request-->', res.locals.express);
        //return res.status(200).json({ express: res.locals.express });
        next();
      }
    })
};

dbController.verifyUser = (req, res, next) =>{
  console.log('in verify User middleware')
  const {username, password} = req.body;

  models.findOne({username}, (err, user) =>{
    if(err) return next('Error in userController.verifyUser: ' + JSON. stringify(err));
    else if (!user){
      console.log('user not verified');
      res.locals.verify = 'false';
      return next();
    }
    else {
      console.log('user succesfully verified');
      res.locals.verify = 'true';
      return next();
    }
  })
}
dbController.getTrips = (req, res, next) => {
  console.log('In middleware getTrips');
  const userID = req.params.id;
  //const username = 'Test4'
  models.findOne({ username: userID }, (err, doc) => {
    if(err) {
      //database error
      return next('Error in dbController.getTrips: ' + JSON.stringify(err));
    } else {
      console.log('result of find method in dbController.getTrips-->', doc.trips);
      res.locals.trips = doc.trips;
      return next();
    }
  });
};

dbController.addTrip = (req, res, next) => {
  console.log('In middleware addTrip');
  //const username = 'Test4';
  const newTrip = req.body;
  const userID = req.params.id;
  console.log('request params --->', req.params.id)
  console.log('request body', req.body);
  const {date, time, odo, start} = req.body;
  models.findOneAndUpdate({ username: userID }, {'$push': { trips : newTrip }}, {new: true}, (err, trip) => {
    if (err) {
      //database error
      return next('Error in dbController.addTrip: ' + JSON.stringify(err));
    } else {
      console.log('succesfully found user, here is trip--->', trip.trips);
      res.locals.addedTrip = trip.trips;
      return next();
    }
  });
};

dbController.deleteTrip = async (req, res, next) => {
  console.log('In middleware deleteTrip');
  console.log('req.params-->', req.params);
  //const objID = req.params;
  const userID = req.params.userID;
  const objID = req.params.objectID;

  models.findOneAndUpdate({username: userID}, {$pull: {trips: {_id: objID}}}, {new: true},(err, doc) => {
    if (err) {
      return next('Error in dbController.deleteTrip: ' + JSON.stringify(err));
    }
    else {
      console.log('deleted successfully')
      console.log('deleted', doc);
      res.locals.newLog = doc.trips;
      return next()
    }
  })
 
  /*
  const arrayIndex = req.params;
  const user = await models.findOne({username : 'Test4'});
  //const trips = user.trips;
  console.log('trips before splice--->', user.trips)
  user.trips.splice(arrayIndex, 1);
  console.log('trips after splice--->', user.trips);
  const updated = await user.save();
  res.locals.obj = updated;
  console.log('updated trip list', updated.trips);
  next();
  */
  //const doc = user.trips.id(mongoose.ObjectId(objID));
  //console.log('specific doc--->', doc)
  //console.log('TRIPS--->',trips)
//   models.findById({ objID }, (err, doc) =>{
//     if (err) {
//       //database error
//       return next('Error in dbController.addTrip: ' + JSON.stringify(err));
//   }else{
//     console.log('found Object in delete Trip')
//     res.locals.obj = doc;
//     next()
//   }
//   //models.findOneAndUpdate({ username }, )
// })
}

module.exports = dbController;