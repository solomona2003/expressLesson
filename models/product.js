const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const p = path.join(rootDir, 'data', 'products.json')

const getProductsFromFile = (cb) => {
  
    fs.readFile(p, (e, d) => {
        if (e) {
            cb([])
        } else {
            cb(JSON.parse(d))
        }
    })
}
module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), e => {
                console.log(e);
            })

        })
       
    }

    static fetchAllProducts(cb) {
        getProductsFromFile(cb)

    }
}