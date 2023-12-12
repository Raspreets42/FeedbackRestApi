require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const router_routes = require('./routes/routes');
const connectDB = require("./db/connect");

app.get('/' , (req , res) => {
    res.send('Hello World');
});

// Enable cors
app.use(cors( {origin: '*' }));

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// middleware or to set router
app.use('/api' , router_routes);

const start = async() => {
    try {
        await connectDB();
        app.listen(port , () => {
            console.log(`server is listening at port ${port}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();