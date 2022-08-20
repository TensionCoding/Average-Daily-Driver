const express = require('express');
const router = express.Router();
const dbController = require('../controllers/mongoControllers')


router.post('/createUser', dbController.createUser, (req, res) => {
  res.status(200).json(res.locals.username);
});
router.post('/login', dbController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.verify);
})
router.get('/getTrips/:id', dbController.getTrips, (req, res) => {
    res.status(200).json(res.locals.trips);
});
router.patch('/addTrip/:id', dbController.addTrip, (req, res) => {
  console.log('made into addTrip PATCH request in router');
  res.status(200).json(res.locals.addedTrip);
});
router.delete('/deleteTrip/:objectID-:userID', dbController.deleteTrip, (req, res) => {
  console.log('made into deleteTrip DELETE request in router');
  res.status(200).json(res.locals.newLog);
});
module.exports = router;