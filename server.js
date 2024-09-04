import express from 'express'; 
import dotenv from 'dotenv'

// connect db // 
import connectDb from './config/db.js';

const app = express();
// dotenv boiler plate // 

dotenv.config();


const port = 3000 || process.env.PORT 

// connect db // 

connectDb();

// get boilerplate // 

app.get('/',(req,res) => {
    res.send('blacknd admin')
})
// listen the port // 

app.listen(port,(req,res) => {
    console.log(`port is on ${port}`)
})