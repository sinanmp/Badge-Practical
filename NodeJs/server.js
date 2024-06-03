const express = require('express')
const app = express()
const morgan = require('morgan');

app.use(morgan());


app.get('/',(req,res)=>{
    const name = req.query.name 
    console.log(name)
    res.send('hello world i am back gys with '+ name)
})



app.listen(3000,(error)=>{
    console.log('app running')
})
