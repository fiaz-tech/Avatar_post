const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//const mongoose = require('mongoose');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3300
const images = require('./routes/uploadRoute')
const connectDB = require('./config/db')

//Allow access to .env file
dotenv.config()

const app = express()



connectDB();


// Middleware
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(morgan("common"))

//configure api from api route
app.use('/api', images)

//Connect to MongoDB Atlas
//mongoose.set("strictQuery", false);
//mongoose.connect(process.env.MONGO_URI, {
//  useNewUrlParser: true,
//}
//).then(() => console.log("mongoDataBase connected"))
//.catch((err) => console.log(err));


// Port
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`)
})