require('dotenv').config();

// libraries
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// -------- database conneciton --------
console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error)) // log errors
db.on('once', () => console.log('Connected to Database')) // do once to confirm connection to database

// -------- middleware --------
app.use(express.json()) // allows express to read json

const subscribersRouter = require('./routes/subscribers') // find the subscriber router path
app.use('/subscribers', subscribersRouter) // use the subscribe router

// -------- start application --------
app.listen(3000, () => console.log('Server Started'))
