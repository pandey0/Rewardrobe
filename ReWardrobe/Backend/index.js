const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db_connect.js');
const userauthroute = require('./Routes/auth.route.js');
const Userfunctions = require('./Routes/userfunctions.route.js');

dotenv.config();
const app = express();
var cors = require('cors')
app.use(cors({
    origin: 'http://localhost:5173', // replace with your React app's origin
    credentials: true, // Allow cookies to be sent
  }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

app.use('/api/Userauth',userauthroute)
// app.use('/api/userfunctions',Userfunctions)



app.listen(4000, () => {
    connectDB();
    console.log('Server started on port 4000')
});