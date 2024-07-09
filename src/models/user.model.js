import { Schema, model } from 'mongoose'

const UserSchema = Schema({
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
});


// module.exports = model('Usuario', UserSchema );

const userModel = model('User', UserSchema)
export default userModel