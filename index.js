var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://127.0.0.1:27017/uderdata');

mongoose.connection.on('connected', ()=>{
    console.log('connected successfully');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error: '+err);
    }
});


const port = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);

app.get('/', (req, res) =>  {
    res.send('foobar');
});

app.listen(port, () => {
    console.log('Server started at port:'+port);
});