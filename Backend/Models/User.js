const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {

        type: String,
        required: true
    },
    email: {
         type: String,
         required: true,
         unique: true
    },
    password: {
        type: String,
        required: true
    }
})
//  unique on email

UserSchema.index({email: 1}, {unique: true})

const UserModel = mongoose.model('User', UserSchema)
UserModel.init().catch(error => console.error('Error connecting to database', error))


module.exports = UserModel