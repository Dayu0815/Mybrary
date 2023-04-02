const mongoose = require('mongoose') //載入mongoose

// 定義資料結構 Schema（資料庫綱要）
// 用 JSON 的方式來告訴 mongo 說 document 資料包含哪些型態
const bookSchema = new mongoose.Schema({
  title: {
    type: String,   //資料型別是字串
    required: true  //這是個必填欄位
  },
  description: {
    type: String,   //資料型別是字串
  },
  publishDate: {
    type: Date,   //資料型別是日期
    required: true  //這是個必填欄位
  },
  pageCount: {
    type: Number,   //資料型別是數字
    required: true  //這是個必填欄位
  },
  createAt: {
    type: Date,   //資料型別是日期
    required: true,  //這是個必填欄位
    default: Date.now //預設目前現在日期
  },
  coverImageName: {
    type: String,   //資料型別是字串
    required: true  //這是個必填欄位
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, //資料型別是物件ID
    required: true,  //這是個必填欄位
    ref: 'Author'
  }
})

//匯出 book資料結構 Schema（資料庫綱要）
module.exports = mongoose.model('Book', bookSchema)