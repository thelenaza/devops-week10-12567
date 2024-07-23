const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/', (req, res) => {
    return res.render('index')
})

//httpt://localhost:3000/vision
router.get('/vision', (req, res) => {
    return res.render('vision')
})

//httpt://localhost:3000/users
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) {
            console.log('Error fetching data')
            res.send('Error retrieving users')
        } else {
            res.json(rows)
        }
    });
})

//httpt://localhost:3000/login
router.get('/login', (req,res) => {
    //res.json({message: 'Login page'})
    res.render('auth/login')
})

//httpt://localhost:3000/register
router.get('/register', (req,res) => {
    //res.json({message: 'Register page'})
    res.render('auth/register')
})


module.exports = router