// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const { req_Info, res_info } = require('./tools')
const routes = require('./routes')
const app = express()
const port = 3000
//樣板引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(function middlewareInfo(req, res, next) {
  // handle request message
  const [reqResult, reqTimestamp] = req_Info(req)
  console.log(reqResult)

  // handle server response message
  res.on('finish', () => {
    const resResult = res_info(res, reqTimestamp)
    console.log(resResult)
    console.log('-----------------------')
  })
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})