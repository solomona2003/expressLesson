const express = require('express')

const router = express.Router()

const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex )
router.get('/cart', shopController.getCart)
router.get('/products', shopController.getProdcuts)
router.get('/checkout', shopController.getCheckout)


module.exports =  {
    router: router,
    okText: "shoping.js works"
}