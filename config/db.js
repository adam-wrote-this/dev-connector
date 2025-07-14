import mongoose from 'mongoose'
import config from 'config'

const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    console.log(db)
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit()
  }
}

export default connectDB
