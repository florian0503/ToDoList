const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.put('/:userId/tasks/:taskId', userController.assignTask)
router.get('/:id/tasks', userController.getUserTasks)

module.exports = router
