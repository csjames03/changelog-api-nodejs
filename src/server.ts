import express from 'express';
import router from './router';
import morgan from 'morgan';
import {protect} from './modules/auth';

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use((req, res, next) => {
    next()
})



app.get('/', (req, res)=>{
    console.log('Hello from express')
    res.status(200)
    res.json({message: 'Hello from express'})
})

app.use('/api',protect,  router)

export default  app 