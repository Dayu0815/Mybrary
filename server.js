const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser') //請改用內建 body-parser，不需另外安裝載入

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//設定每筆請求，透過 body-parser 前置處理，透過 methodOverride(路由覆蓋機制) 前置處理
//將 request 導入 Router路由器
app.use(express.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose') //載入mongoose

//設定連線到 mongoDB，在連線資料庫的同時傳入設定，可以直接把兩組設定合併成一個物件，更新語法
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//取得資料連線狀態_連線異常_連線成功 顯示訊息
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.use('/', indexRouter)
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 3000) //如果在 Heroku 環境使用 process.env.PORT，若在本地環境使用3000