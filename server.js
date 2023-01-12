require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8001
const cors = require('cors')
const path = require('path');
const connectDB = require('./db/db');
const apiRoute = require('./routes/api')

app.use(express.json());
app.use(cors());

app.use('/api', apiRoute);


if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

app.get('/', (req,res) =>{
    res.send('hello')
})
// Connetion to db

connectDB();


app.listen(PORT , () =>{
    console.log(`Server started at ${PORT}`)
})