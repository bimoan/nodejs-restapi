const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://admin:p@ssword1@cluster0-2ow7r.mongodb.net/learn?retryWrites=true&w=majority', { useNewUrlParser: true })

//Routes

const contacts = require('./routes/contacts')
r
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/greet', (req, res) => {
    res.send('Hi, ini adalah API pertama-ku');
})

app.use('/contacts/', contacts);

const port = 3000
app.listen(port, () => {
    console.log('turn on port' + ' ' + port);
})