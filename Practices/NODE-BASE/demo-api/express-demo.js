const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.listen(process.env.PORT)

let nodejsBook = {
    title : "Node.js를 공부해보자",    
    price : 20000,    
    description : "이책 좋음, 송아쌤이 지으심"    
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/products/1', function (req, res) {
    res.json(node)
})

