const mongoose = require('mongoose');


const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: [
    {
      type: String,
      trim: true,
      lowercase: true
    }],
  totalClasses: {
    type: Number,
    default: 0,
  },
  classesBunked: {
    type: Number,
    default: 0,
  },
  semester: {
    type: Number,
    required: true,
  },
  subjectType: {
    type: String,
    default:"regular"
  },
  backgroundImage: {
    type: Buffer,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

//creating connections between subject and attendance
subjectSchema.virtual('attendance', {
  ref:"Attendance",
  localField: "_id",
  foreignField: 'attendanceOf'
})

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;