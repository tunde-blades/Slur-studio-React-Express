const mongoose = require('mongoose')

const beatsSchema = new mongoose.Schema({
    beatTitle:{
        type: String,
        require: true
    },
    beatProducer:{
        type: String,
        require: true
    },
    beatType:{
        type: String,
        require: true
    },
    artist:{
        type: String
    },
    // beatfile:{
    //     type: String,
    //     require: true
    // },
    // beatfilepath:{
    //     type: String,
    //     require: true
    // },
    beatbanner:{
        type: String,
        require: true
    },
    beatbannerpath:{
        type: String,
        require: true
    },
    addedAt:{
        type: Date,
        default:Date.now
    }
})

const allbeats = mongoose.model('beat', beatsSchema)

module.exports = allbeats