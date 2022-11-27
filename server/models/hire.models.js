const mongoose = require('mongoose');

const HireSchema = {
    name: {
        type: String,
        required: [true, 'Name cannot be missing'],
        minLength: [2, 'minimum 2 character length'],
        maxLength: [32, 'maximum 32 character length'],
    },

    email: {
        type: String,
        required: [true, 'email cannot be missing'],
        lowercase: true,
        unique: true,
        validate: [validateEmail, 'Must have a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must have a valid email address'],
    },

    company: {
        type: String,
        required: [true, 'company needed'],
        maxLength: [128, 'maximum characters 128']
    }, 

    description: {
        type: String,
        require: [true, 'description of job needed'],
        minLength: [12, 'minimum 12 character length'],
        maxLength: [256, 'maximum 256 character length'],
    },
};

module.exports = mongoose.model("Hire", HireSchema);