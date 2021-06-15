import express from 'express'
import gameController from '../controllers/game.js'

const router = express.Router();

router.get('/', gameController.getAllGames)
router.post('/', gameController.postGame)
router.get('/:id', gameController.getSingleGame)

export default router