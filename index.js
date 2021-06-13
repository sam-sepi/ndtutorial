import express from 'express'
import dotenv from 'dotenv'
import router from './routes/games.js'

dotenv.config()

const APP = express()
const PORT = process.env.PORT || 4000

APP.use('/api/games', router)

APP.listen(PORT, () => console.log('SERVER RUNNING...'))
APP.get('/', (req, res) => res.send('HOME'))