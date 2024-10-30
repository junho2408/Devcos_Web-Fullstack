const express = require('express')
const app = express()

app.listen(1234)

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/:id', function(req,res) {
    let {id} = req.params
    id = parseInt(id)

    if(db.get(id) == undefined){
        res.json({
            message : "없는 상품입니다."
        })
    }else{
        product = db.get(id)
        product.id = id
        
        res.json(product)
    }
})

let db = new Map()
let Monitor = {
    productName : "Monitor",
    price : 120000
}
let Cup = {
    productName : "Cup",
    price : 12000
}
let Chair = {
    productName : "Chair",
    price : 250000
}
let Poster = {
    productName : "Poster",
    price : 80000
}

db.set(1, Monitor) // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, Cup)
db.set(3, Chair)
db.set(4, Poster)

console.log(db)