const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String }
});

// const user = new mongoose.Schema({
//   firstName: {
//     type: String
//   },
//   lastName: {
//     type: String
//   }
// });

// var User = mongoose.model(user, user, 'user');
// module.export = { User }

//Export model
module.exports = mongoose.model('User', UserSchema);

