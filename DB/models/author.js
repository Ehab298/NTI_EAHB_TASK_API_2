const mongoose = require('mongoose')
const validator = require('validator')


const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid.')
            }
        }
    },
    age: {
        type: Number,
        default: 10,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
            if (!strongRegex.test(value)) {
                throw new Error('Passowrd must include uppercase, lowercase, numeric and special character.')
            }
        }
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
    
    },
    avatar: {
        type: Buffer
    },
    roles: {
        type: String,
        enum: ['admin', 'author'],
        default: 'author'
    },
  
  
}, {
    timestamps: true
})

module.exports=mongoose.model("author",authorSchema )