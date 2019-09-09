const express = require('express')
const adminController = require('../controllers/admin')

const router = express.Router()

// starts with /admin 
router.get('/add-product', adminController.getAppProduct)
// starts with /admin 
router.post('/add-product', adminController.postAddProduct)
// starts with /admin 
router.get('/products', adminController.getAdminProducts)

module.exports = {
    router: router,
    okText: "admin.js is working",
   
}