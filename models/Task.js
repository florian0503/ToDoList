const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  date: { type: Date },
  completed: { type: Boolean, default: false },
})

module.exports = mongoose.model('Task', TaskSchema)
