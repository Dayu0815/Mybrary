const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

//匯出 router路由器
module.exports = router