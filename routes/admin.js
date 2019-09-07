const express = require('express')
const path = require('path')
const rootDir = require('../util/path')

const router = express.Router()
const product = []

// starts with /admin 
router.get('/add-product', (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('add-product', 
    {docTitle: 'add-products',
     formscss: true,
     productcss: true,
     activeaddproduct: true
    })
})

// starts with /admin 
router.post('/add-product',(req, res, next)=> {
    res.redirect('/')
    product.push({title: req.body.title})
    console.log(product );
    
    
    
})

module.exports = {
    router: router,
    okText: "admin.js is working",
    product: product
}