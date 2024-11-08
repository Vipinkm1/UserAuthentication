const mongoose = require('mongoose')
//  maongodb url

const dbURI = 'mongodb://localhost:27017/Authentication'


//  connect to the database

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to databse')
})
.catch((error) => {
    console.error('Error connecting to databse', error)
})


