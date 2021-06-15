import Game from "../models/game.js"

const gameController = {}

gameController.getAllGames = (req, res) => res.send('All games')
gameController.getSingleGame = (req, res) => res.send('Single Game')
gameController.postGame = (req, res) => 
{
    const gg = new Game(
        {
            title: req.body.title,
            developer: req.body.developer,
            publisher: req.body.publisher,
            release: req.body.date
        }
    )
    
    gg.save()
    .then(game => res.json(game))
    .catch(error => res.json(error))
}

export default gameController