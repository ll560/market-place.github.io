const express = require('express');
const app = express();
const PORT = 3000
const memes = require('./models/memes')

//setup engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//=======Middleware================
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) =>{
    console.log('Middleware for each route')
    next()
})



//=============Routes===============
app.get('/', (req, res) => {
    res.render('Index', {memes: memes})
})

app.get('/fruits/new', (req, res) =>{
    res.render('New')
})

//show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    console.log(memes)
    res.render('Show', {meme: memes[req.params.indexOfFruitsArray]})
})

//create route -- actived by clicking button
app.post('/', (req, res) =>{
    memes.push(req.body)
    console.log('this is the new data--------->', req.body)
    res.redirect('/')
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))