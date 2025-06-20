const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean,
    date: { type: Date, default: Date.now }
});

const Course = mongoose.model('Course', courseSchema);
async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Fasakin Henry',
        tags: ['angular', 'frontend', 'javascript'],
        isPublished: true
    });

    const result = await course.save();
    console.log('Course created:', result);
}

async function getCourses() {
    const courses = await Course
        .find({ isPublished: true, tags: 'frontend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 });

    console.log('Courses found:', courses);
}

getCourses();
