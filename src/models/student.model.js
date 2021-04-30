import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    yearOfBirth: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

export default mongoose.model('Student', StudentSchema);
