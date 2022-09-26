const mongoose = require('mongoose') //載入mongoose

// 定義資料結構 Schema（資料庫綱要）
// 用 JSON 的方式來告訴 mongo 說 document 的資料會包含哪些型態
const authorSchema = new mongoose.Schema({
  name: {
    type: String,   //資料型別是字串
    required: true  //這是個必填欄位
  }
})

//匯出 author資料結構 Schema（資料庫綱要）
module.exports = mongoose.model('Author', authorSchema)