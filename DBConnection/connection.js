const mongoose = require('mongoose');
const URI =
  'mongodb+srv://Retro:Retro@clusterretro-2q3zf.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('Tada Connected to database');
};

module.exports = connectDB;
