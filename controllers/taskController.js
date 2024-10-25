const Task = require('../models/Task')

exports.getTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

exports.createTask = async (req, res) => {
  const newTask = new Task(req.body)
  await newTask.save()
  res.json(newTask)
}

exports.getTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findById(id)
  res.json(task)
}

exports.updateTask = async (req, res) => {
  const { id } = req.params
  const { title, completed } = req.body

  const task = await Task.findByIdAndUpdate(
    id,
    { title, completed },
    { new: true }
  )
  res.json(task)
}

exports.deleteTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findByIdAndDelete(id)
  res.json({ message: 'Tâche supprimée.' })
}

exports.getTaskByStatus = async (req, res) => {
  const { status } = req.params
  const tasks = await Task.find({ completed: status })
  res.json(tasks)
}

exports.getTaskByDate = async (req, res) => {
  const { date } = req.params
  const tasks = await Task.find({ date: date })
  res.json(tasks)
}
