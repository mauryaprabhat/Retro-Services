const express = require('express');
const mongoose = require('mongoose');
const User = require('../DBConnection/UserTest');
const route = express.Router();

// POST Method for UserTest...
route.post('/', (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new User(user);
  userModel.save();
  res.json(userModel);
});


// route.get('/gettest', (req, res) => {
//   console.log('logging');
// });
// route.post('/', (req, res) => {
//   let user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName
//   });
//   user.save(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.send('User added sucessfully!');
//     res.json(user);
//   });
// });

module.exports = route;
