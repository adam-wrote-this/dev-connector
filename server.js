import express from 'express'
import connectDB from './config/db.js'
import userApi from './routes/api/users.js'
import authApi from './routes/api/auth.js'

// const path = require('path')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/users', userApi)
app.use('/api/auth', authApi)
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resvole(__dirname, 'client', 'build', 'index.html'))
//   })
// }

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server started on port ' + PORT))
