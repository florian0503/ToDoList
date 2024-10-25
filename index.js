const app = require('./app')
const mongoose = require('mongoose')

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/to-do-list')
    console.log('✅ Connected to MongoDB')

    app.listen(3000, () => console.log('✅ Server started on port 3000'))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
