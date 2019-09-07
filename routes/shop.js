const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()
const  adminData = require('./admin')

router.get('/',(req, res, next) => {
    const product = adminData.product
    
    res.render('shop', {prods: product, docTitle: 'shop'})
})


module.exports =  {
    router: router,
    okText: "shoping.js works"
}