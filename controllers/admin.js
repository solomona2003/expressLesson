const Product = require('../models/product')

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
    console.log(product);
}

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAllProducts(product => {
        res.render('admin/products',
            {
                prods: product,
                docTitle: 'Admin Products',
                path: '/admin/products'
            }
        )
    })
}

exports.getAppProduct = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('admin/add-product',
        {
            docTitle: 'Admin Add Products',
            path: '/admin/add-product'
        })
}