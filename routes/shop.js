const express = require('express')

const router = express.Router()

const productController = require('../controllers/products')

router.get('/', productController.getProdcuts )



module.exports =  {
    router: router,
    okText: "shoping.js works"
}