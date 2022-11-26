const express = require('express')
const mongoose = require('mongoose')
const bodyPerser = require('body-parser')
const route = require('./routes/route')

const app = express()


app.use(bodyPerser.json())

app.use(bodyPerser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://jaganreddy-functionup:ORj2ygJHT7jbS3y8@cluster0.nduth.mongodb.net/open-internings?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)
app.listen(process.env.PORT || 3000, function(){
    return console.log('express app running on' + (process.env.PORT || 3000))
})

