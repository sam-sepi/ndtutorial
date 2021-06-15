import mongoose from "mongoose"

var Schema = mongoose.Schema

var GameSchema = new Schema
({
    title: {type: String, required: true},
    developer: {type: String, required: true},
    publisher: {type: String, required: true},
    release: {type: Date}
})

const Game = mongoose.model('Game', GameSchema)

export default Game