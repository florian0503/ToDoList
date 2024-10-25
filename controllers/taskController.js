const Task = require('../models/Task'); 

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });
  await newTask.save();
  res.json(newTask);
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  res.json({ message: "Tâche supprimée." });
};
