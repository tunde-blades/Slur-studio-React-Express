
const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const multer = require("multer")
const methodOverride = require("method-override")
const path = require('path')
const app = express()
const PORT = 3001
const allbeats = require('./model/allbeats')



mongoose.connect('mongodb://127.0.0.1:27017/musics?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('database conected')).catch( err =>  console.log(err))


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'views/beat schema'))
app.set('view engine', 'ejs')
app.use('./static', express.static('static'))

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
  cb(null, './static')
  },
  filename :(req, file, cb)=>{
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})

app.get('/', (req, res)=>{
  allbeats.find({}, (err, data)=>{
    if(err){
      console.log(err)
    }else{
      res.render('AddBeats', {allbeats: data}) 
    }
  }
)})


app.post('/beats', upload.single('beatbanner'),(req, res)=>{
  const beatTitle = req.body.beatTitle
  const artist = req.body.artist
  const beatProducer = req.body.beatProducer
  const beatType = req.body.beatType
  const addedAt = req.body.addedAt

  // const beatfile = req.file.originalname
  // const beatfilepath ='static/' + req.file.originalname

  const beatbanner = req.file.originalname
  const beatbannerpath ='static/' + req.file.originalname
  
  const newBeat = new allbeats({
    beatTitle, artist, beatProducer, beatType, beatbanner, beatbannerpath, addedAt
  })
  newBeat.save((err, data)=>{
    if (err){
      console.log(err)
    }
    res.redirect('/')
  })
  console.log(newBeat)
})

app.get('/deletedata/:id', (req,res)=>{
  allbeats.deleteOne({_id: req.params.id}, (err, data)=>{
    if (err){
      console.log(err)
    }else{
      res.redirect('/')
    }
  })
})


 app.listen(PORT, ()=> console.log(`server running on ${PORT}`))
 



