const { Schema, model, Types } = require('mongoose');

const patientSchema = new Schema({
    ssn: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

const Patient = model('patient', patientSchema);

module.exports = Patient;
