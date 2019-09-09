const express = require('express');
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopingRouter = require('./routes/shop')
const path = require('path')
const rootDir = require('./util/path')
const error = require('./controllers/error')

// const expressHbs = require('express-handlebars')

const app = express();
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs'}))
// app.set('view engine', 'hbs')

// app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/admin', adminData.router)
app.use(shopingRouter.router)

app.use( error.showe404) 

app.listen(4000)