const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors')

// app.use('/', function(req, res){
//     res.send('This is Prabhakaran');
// });

// Middleware
app.use(morgan('dev'));
app.use(express.json())
app.use(cors());


//Router start
const infoRouter =  require('./router');
app.use('/info', infoRouter);
//Router end


app.listen(process.env.PORT || 5000, () => {
    console.log("server started");
});

var local = 'mongodb://localhost:27017/myapp';
var live = 'mongodb+srv://admin:EJn3pmCBX4dppF5@test.cliqz.mongodb.net/myapp';

mongoose.connect(live, (error) => {
    if(!error){
        console.log('DB Connected Successfully');
    }    
});