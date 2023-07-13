import express from 'express';


const app = express()


app.get('/', (req, res)=>{
    console.log('Hello from express')
    res.status(200)
    res.json({message: 'Hello from express'})
})



app.get('/name', (req, res)=>{
    res.status(200)
    return res.json({name: 'James'})   
})

export default  app 