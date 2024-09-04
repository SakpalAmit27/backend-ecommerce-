import express from 'express'; 
import dotenv from 'dotenv'

const app = express();
// dotenv boiler plate // 

dotenv.config();


const port = 3000 || process.env.PORT 

// get boilerplate // 

app.get('/',(req,res) => {
    res.send('blacknd admin')
})
// listen the port // 

app.listen(port,(req,res) => {
    console.log(`port is on ${port}`)
})