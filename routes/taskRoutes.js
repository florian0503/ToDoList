const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.get('', taskController.getTasks)
router.post('', taskController.createTask)
router.delete('/:id', taskController.deleteTask)
router.put('/:id', taskController.updateTask)
router.get('/:id', taskController.getTask)

module.exports = router
