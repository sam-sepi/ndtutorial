import Game from "../models/game.js"

const gameController = {}

gameController.getAllGames = (req, res) => 
{
    Game.find()
        .then(games => res.json(games)) 
        .catch(error => res.json(error))
}

gameController.getSingleGame = (req, res) => 
{
    Game.find( { _id: req.params.id })
        .then(gg => res.json(gg)) 
        .catch(error => res.json(error))
}

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