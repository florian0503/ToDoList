const User = require('../models/User')
const Task = require('../models/Task')

exports.getUsers = async (req, res) => {
  const users = await User.find()

  res.json(users)
}

exports.getUser = async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id)

  res.json(user)
}

exports.createUser = async (req, res) => {
  const user = await User.create(req.body)

  res.json(user)
}

exports.updateUser = async (req, res) => {
  const { id } = req.params

  const user = await User.findByIdAndUpdate(id, req.body)

  res.json(user)
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params

  const user = await User.findByIdAndDelete(id)

  res.json(user)
}

exports.assignTask = async (req, res) => {
  const { userId, taskId } = req.params

  const user = await User.findByIdAndUpdate(userId, { tasks: [taskId] })

  res.json(user)
}

exports.getUserTasks = async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id).populate('tasks')

  res.json(user.tasks)
}
