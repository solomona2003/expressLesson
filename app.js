const express = require('express');
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopingRouter = require('./routes/shop')
const path = require('path')
const rootDir = require('./util/path')

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))


app.use( '/admin', adminRoutes.router)
app.use(  shopingRouter.router)

app.use('/', (req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)