const express = require('express');
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopingRouter = require('./routes/shop')
const path = require('path')
const rootDir = require('./util/path')

const app = express();
app.set('view engine', 'pug')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))


app.use( '/admin', adminData.router)
app.use(  shopingRouter.router)

app.use('/', (req, res, next)=>{
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    res.render('404', {docTitle: '404'})
})

app.listen(4000)