const Product = require('../models/product')

exports.getAppProduct = (req, res, next) => {
    // res.sendFile( path.join(rootDir, 'views', 'add-product.html') )
    res.render('admin/add-product',
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
   Product.fetchAllProducts((products)=> {
       res.render('shop/product-list',
           {
               prods: products, 
               docTitle: 'shop',
               hasproducts: products.length > 0,
               activeshop: true,
               productcss: true,
               path: '/'
               
           })
   });
}

