const express = require('express');
const app = express();
const port = process.env.port || 3000;
const connectDB = require('./DBConnection/connection');
connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./API/User'));

app.listen(port, () => console.log('Tada Server has started!!!'));
