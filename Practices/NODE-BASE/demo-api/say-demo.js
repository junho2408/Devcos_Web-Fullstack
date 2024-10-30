const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
    res.json({
        say : '안녕하세용!!'
    })
})

app.get('/bye', function (req, res) {
    res.json({
        say : '안녕히가세용~'
    })        
})
app.get('/nicetomeetyou', function (req, res) {
    res.send({
        say : '방갑습니다!!'
    })
})

app.listen(1234)