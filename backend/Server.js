const express = require('express');
const mongoose = require('mongoose');
const clc = require('cli-color');
const cors = require('cors');
const adminrouter = require('./routes/adminRoutes');
const employeeRouter = require('./routes/employeeRoutes');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 2863;
  
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI_ATLAS)
.then(() => console.log(clc.green.underline('Connected to Database Successfully')))
.catch(err => console.log(clc.red(` Error while connecting to Database: ${err.message}`)));
app.get("/",(req,res)=>{
  res.status(200).send("ELMS Backend Started")
}
app.use("/admin",adminrouter)

app.use("/employee",employeeRouter)


app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
