const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.get('', taskController.getTasks)
router.post('', taskController.createTask)
router.delete('/:id', taskController.deleteTask)
router.put('/:id', taskController.updateTask)
router.get('/:id', taskController.getTask)

// status 0 pour not completed, 1 pour completed
router.get('/status/:status', taskController.getTaskByStatus)

// date : ex 2024-07-03T00:00:00.000Z
router.get('/date/:date', taskController.getTaskByDate)

module.exports = router
