const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./server/routes/api');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', apiRouter);

/*
app.post('/express_backend', (req, res) => { //Line 9
  console.log('express_backend');
  console.log('req.body-->', req.body)
  const { username, password, trips } = req.body;
  if(!username || !password) return res.send({ express: 'ENTER VALID CREDENTIALS'})
  User.create({ username, password, trips }, (err, user) => {
    if (err) {
      return res.send({ express: 'ERROR OCCURED IN CREATE'})
    } else {
      user.markModified('trips');
      user.save();
      console.log('user.username', user.username, 'user.trips-->', user.trips);
      res.locals.express = user.trips;
      console.log('response.locals.express object in server.js POST request-->', res.locals.express);
      return res.status(200).json({ express: res.locals.express });
    }
  })
  //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'}); //Line 10
});

*/
//app.get('/', (req, res) => res.json({message: 'Welcome to my app.'}));


app.use('*',(req, res) =>  res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message : { err : 'An error occured' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//const PORT = process.env.PORT || 8080;
const PORT = 8080;
app.listen(PORT, () =>{
  console.log(`Server listening on port: ${PORT}`); 
});
