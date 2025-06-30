const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');

//setup
dotenv.config();

//app
const app = express()
app.use(express.json())

//connect mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅Connected to Atlas"))
    .catch((err) => console.log("❌Error DB connection error"))

    //Routes
app.use('/students',studentRoutes)


//server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})