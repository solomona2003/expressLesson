const express = require('express')
const productsController = require('../controllers/products')

const router = express.Router()

// starts with /admin 
router.get('/add-product', productsController.getAppProduct )

// starts with /admin 
router.post('/add-product', productsController.postAddProduct)

module.exports = {
    router: router,
    okText: "admin.js is working",
   
}