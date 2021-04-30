import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Course', CourseSchema);
