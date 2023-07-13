import {Router} from 'express';

const router = Router()

//Get all the products
router.get('/product', (req, res) => {
    res.json({'message': 'Hello!'})
    res.status(200)
})

//Get a specific product
router.get('/product/:id', (req, res) => {


})

//Update a specific product
router.put('/product/:id', (req, res) => {


})

//Insert a new product
router.post('/product', (req, res) => {


})

//Delete a specific product
router.delete('/product/:id', (req, res) => {


})



//Updates 


//Get all the updates
router.get('/update', (req, res) => {


})

//Get a specific update
router.get('/update/:id', (req, res) => {


})

//Update a specific update
router.put('/update/:id', (req, res) => {


})

//Insert a new update
router.post('/update', (req, res) => {


})

//Delete a specific update
router.delete('/update/:id', (req, res) => {


})



//Update Points 

//Get all the updatepoints
router.get('/updatepoint', (req, res) => {


})

//Get a specific updatepoint
router.get('/updatepoint/:id', (req, res) => {


})

//Update a specific updatepoint
router.put('/updatepoint/:id', (req, res) => {


})

//Insert a new updatepoint
router.post('/updatepoint', (req, res) => {


})

//Delete a specific updatepoint
router.delete('/updatepoint/:id', (req, res) => {


})

export default router