import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './dbconnect.js'
import router from './routes/games.js'

dotenv.config()
dbConnect()

const APP = express()
const PORT = process.env.PORT || 4000

APP.use(express.json());

APP.use('/api/games', router)


APP.listen(PORT, () => console.log('SERVER RUNNING...'))
APP.get('/', (req, res) => res.send('HOME'))