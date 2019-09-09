
const Product = require('../models/product')



exports.getCart = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('shop/cart',
        {
            docTitle: 'Your Cart',
            path: '/cart'
        })
}

exports.getCheckout = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('shop/checkout',
        {
            docTitle: 'Checkout',
            path: '/checkout'
        })
}


exports.getProdcuts = (req, res, next) => {
    Product.fetchAllProducts((products) => {
        res.render('shop/product-list',
            {
                prods: products,
                docTitle: 'Shop Products',
                hasproducts: products.length > 0,
                path: '/products'

            })
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAllProducts((products) => {
        res.render('shop/index',
            {
                prods: products,
                docTitle: 'Shop Index',
                path: '/'

            })
    });
}