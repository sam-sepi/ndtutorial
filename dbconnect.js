import mongoose from 'mongoose'

const dbConnect = () => 
{
    mongoose.connect('mongodb://localhost:27017/games', { useNewUrlParser: true })
    .then(console.log('DB Connect'))
    .catch(error => handleError(error));
}

export default dbConnect;