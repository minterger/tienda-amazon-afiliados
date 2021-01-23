const mongoose = require('mongoose')

const { MONGODB_CONNECTION_IP, MONGODB_CONNECTION_DB} = process.env
const CONNECT = `mongodb://${MONGODB_CONNECTION_IP}/${MONGODB_CONNECTION_DB}`

mongoose.connect(CONNECT, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err))