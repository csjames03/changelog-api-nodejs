import app from './server';
import * as dotenv from 'dotenv'
dotenv.config()
const port = 3000


app.listen(port,async ()=>{
    console.log(`listening on port ${port}`)
})


