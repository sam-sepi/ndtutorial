import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const APP = express()
const PORT = process.env.PORT || 4000

APP.listen(PORT, () => console.log('SERVER RUNNING...'))
APP.get('/', (req, res) => res.send('HOME'))