const express = require('express');
const app = express();
const PORT = 3000
const memes = require('./models/memes')

//setup engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//routes
app.get('/', (req, res) => {
    res.render('Index', {memes: memes})
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    //console.log(memes)
    res.render('Show', {meme: memes[req.params.indexOfFruitsArray]})
})

//
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))