const express = require('express')
const app = express()
app.listen(1234)

const fruits=[
    {id : 1, name : 'apple'},
    {id : 2, name : 'orange'},
    {id : 3, name : 'strawberry'},
    {id : 4, name : 'blueberry'}
]

// 과일 전체 조회
app.get('/fruits', function(req,res){
    const fruitsData = {}
    fruits.forEach(function(a,b){
        fruitsData[b] = a
    })

    res.json(fruits)

})

// 과일 개별 조회
app.get('/fruits/:id', function(req,res){
    let id = req.params.id
    id = parseInt(id)

    var findFruit = fruits.find(f => (f.id == id))
    // JS의 배열에서 사용하는 함수 => find
    // 아래의 구문과 동일한 의미
    /*
    fruits.forEach(function(fruit){
        if(fruit.id == id){
            findFruit = fruit
        }
    })
    */

    if(findFruit)
        res.json(findFruit)
    else // 예외를 터뜨린다 = http status code가 실패 코드를 반납하도록 해야한다
    // 찾는 리소스가 없는 경우 : 404
        res.status(404).send(
            "전달주신 id의 과일이 없습니다."
        )
}) // htttp 상태 코드 : 클라이언트(사용자)와의 소통을 정확하게 하기 위함