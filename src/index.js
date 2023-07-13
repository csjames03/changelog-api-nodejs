const app = require('./server');

const port = 3000


app.listen(port,async ()=>{
    console.log(`listening on port ${port}`)
    const r = await  fetch('http://localhost:3000/name')
    const response = await r.json()
    console.log(response.name)
})


