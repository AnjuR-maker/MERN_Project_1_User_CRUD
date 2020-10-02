const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb+srv://assettracker:assettracker@assettrackercluster.tkpyw.mongodb.net/assetTrackerDB?retryWrites=true&w=majority',{useNewUrlParser: true})
const app = express()



app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use('/api',require('./routes/index'))

const port = process.env.PORT | 80





app.listen(port)