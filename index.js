require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

app.get('/' , (req, res)=>{
 res.send('Hello World')
})

app.get('/twitter' , (req, res)=>{
  res.send('Welcome to the twitter')
})

app.get('/login' , (req , res)=>{
 res.send('<h1> Please login in to your account </h1>')
})

app.get('/youtube' , (req, res)=>{
 res.send('<h2>Chai and code </h2>')
})

app.listen(process.env.PORT , ()=> {
 console.log(`Example app is listening on port ${port}`)
})