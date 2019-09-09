const Product = require('../models/product')

exports.getAppProduct = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('add-product',
        {
            docTitle: 'add-products',
            formscss: true,
            productcss: true,
            activeaddproduct: true,
            path: '/admin/add-product'
        })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
    console.log(product);
}

exports.getProdcuts = (req, res, next) => {
   const products = Product.fetchAllProducts();
    res.render('shop',
        {
            prods: products, 
            docTitle: 'shop',
            hasproducts: products.length > 0,
            activeshop: true,
            productcss: true,
            path: '/'
            
        })
}

