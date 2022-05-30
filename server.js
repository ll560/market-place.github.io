require('dotenv').config()
const express = require('express')
const {connect, connection} = require('mongoose')
const method = require('method-override')
//const cloudinary = require('cloudinary').v2;
//console.log(cloudinary.config().cloud_name);
const app = express()
const PORT = 3000
const Meme = require('./models/Meme')

// ===== Connection to Database =====
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engineze
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())
// app.use((req, res, next) => {
//     console.log('I run for all the routes.')
//     next()
// })

// ===== Routes =====

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/memes', (req, res) => {
    // Query model to return all fruits
    Meme.find({}, (err, allMemes) => {


        res.render('Index', {memes: allMemes})
    })
})

// New
app.get('/memes/new', (req, res) => {
    res.render('New');
});

app.delete('/memes/:id', (req, res) => {
    // Delete funciton has 2 arguments
    /*
        1. the id 
        2. callback
    */
    Meme.findByIdAndDelete(req.params.id, (err) => {
        if (!err){
            res.status(200).redirect('/memes')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/memes/:id', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    // Update funciton has 4 arguments
    /*
        1. the id 
        2. the content of what we want to update 
        3. options object {new:true}- gives the callback function the newly updated document
        4. callback
    */
    Meme.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMeme) => {
        if (!err) {
            res.status(200).redirect('/memes')
        } else {
            res.status(400).json(err)
        }
    })
})
app.put('/memes/:id/stock', async (req, res) => {
    
    const meme = await Meme.findById(req.params.id)
    
    Meme.findByIdAndUpdate(req.params.id, {quantity: (meme.quantity-1)}, {new: true}, (err, updatedQuantity) =>{if (!err) {
        res.status(200).redirect('/memes')
    } else {
        res.status(400).json(err)
    }
    })
})


// Create
app.post('/memes', (req, res) => {
    // req.body.readyToEat === 'on'
    // ?
    // req.body.readyToEat = true
    // :
    // req.body.readyToEat = false
    // console.log('BEFORE', req.body.name)
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

    // Below line mimics working with a database
    // fruits.push(req.body)
    // console.log('req.body:', req.body)

    // Create 1st arg: the actual object we want to insert inside our database
    // Callback 1st arg: error
    // Callback 2nd arg: the newly created object

    Meme.create(req.body, (err, createdMeme) => {
        // console.log(createdFruit)
        // res.send(createdFruit)
        res.redirect('/memes')
    })
})

app.post('/memes/:id/stock', (req, res) => {
    console.log("This is working")
    
})

// Edit 
app.get('/memes/:id/edit', (req, res) => {

    // if (req.body.quantity === 0){
    //  
    //}  
    // Querying our database to find the document we want to edit and send that data to the Edit.jsx page
    Meme.findById(req.params.id, (err, foundMeme) => {
        if (!err) {
            res.render('Edit', {meme: foundMeme})
        } else {
            res.status(400).json(err)
        }
    })
})


// Show
app.get('/memes/:id', (req, res) => {
    Meme.findById(req.params.id, (err, foundMeme) => {
        res.render('Show', {meme: foundMeme})
    } ) 
    // This will display our Show component in the browser. Node will automatically look for a Show file inside the views folder.
})

// Returns giant object with info and methods we can use
// Focus on Query object
// console.dir(Fruit)


// cloudinary.uploader
// .upload("./public/images/red-blood-cell.png", {
//     resource_type:"image",
// })
// .then((result)=>{
//     console.log("sucess", JSON.stringify(result, null, 2));
// })
// .catch((error) => {
//     console.log('error', JSON.stringify(error, null, 2));
// });

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))