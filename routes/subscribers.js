const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        // 500 -> problem with the server
        res.status(500).json({ message : err.message })
    }
})

// Getting one
router.get('/:id', (req, res) => {
    let id = req.params.id
    res.send(id)
})

// Creating
router.post('/', (req, res) => {
})

// Updating
// only update what is needed, put will update all the data
router.patch('/:id', (req, res) => {
    req.params.id  
})

// Deleting
router.delete('/:id', (req, res) => {
    req.params.id  
})

module.exports = router