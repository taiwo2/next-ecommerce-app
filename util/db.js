import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import morgan from 'morgan'

import dotenv from 'dotenv';

const app = express();
dotenv.config();
//body parser to send in post request
app.use(morgan('dev'));
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use(cors())

app.get("/",(req,res) => {
  res.send("Welcome to tour API")
});
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, {
}).then(() => app.listen(PORT, () =>
  console.log(`connection is established and running on port : ${PORT}`)
)).catch((err) => console.log(err.message));