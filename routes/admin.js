const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()


// starts with /admin 
router.get('/add-product', (req, res, next) => {
    res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
})

// starts with /admin 
router.post('/add-product',(req, res, next)=> {
    res.redirect('/')
    console.log(req.body);
    
    
})

module.exports = {
    router: router,
    okText: "admin.js is working"
}