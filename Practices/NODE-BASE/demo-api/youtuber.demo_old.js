/* 
< API 설계 (URL, method) >
0) 전체 유튜버 조회 : GET /youtubers
    - req : X
    - res : map을 전체 조회

1) 개별 유튜버 조회 : GET /youtubers/:id 
=> id로 map에서 객체를 찾고, 객체의 정보를 뿌려줌
    - req : params.id <= map에 저장된 key값을 전달
    - res : map에서 id로 객체를 조회해서 전달

2) 유튜버 등록 : POST /youtubers
    - req : body <= {channelTitle, sub=0, videoNum=0} 신규 유튜버 정보 전달
    - res : "channelTitle님, 유튜버로써의 성장을 기원합니다!!"

3) 개별 유튜버 삭제 : DELETE /youtubers/:id
    - req : params.id
    - res : "channelTitle님, 다음에 뵙겠습니다!!"

4) 전체 유튜버 삭제 : DELETE /youtubers
    - req : X
    - res : "전체 유튜버가 삭제되었습니다."

5) 개별 유튜버 수정 : PUT /youtubers/:id
    - req : params.id, body <= channelTitle
    - res : "(이전)channelTitle님, 채널명이 (새로운)channelTitle로 변경되었습니다."
*/

const express = require('express')
const app = express()
app.listen(1234)

// 미리 짜본 Map의 키를 자동으로 지정해주는 함수
var id = 1
// function dbKeyChecker(){
//     while(true){
//         if(db.get(mapDbKey) == null){
//         }
//             else {
//             mapDbKey += 1
//         }
//         return mapDbKey
//     }
// }

let youtuber1={
    channelTitle : "샤코타임",
    sub : "27.3만명",
    videoNum : "877개"
}

let youtuber2={
    channelTitle : "똥그랩",
    sub : "13.6만명",
    videoNum : "455개"
}

let youtuber3={
    channelTitle : "술익는집",
    sub : "58.6만명",
    videoNum : "230개"
}

let db = new Map()
db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

app.get('/youtubers', function (req,res){
    if(db.size >= 1){
        var youtubers = {}
        db.forEach(function(value, key){
            youtubers[key] = value
        })
    
        res.json(youtubers)
    } else{
        res.json({
            message : "조회할 유튜버가 없습니다."
        })
    }
})

app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    let youtuber = db.get(id)
    youtuber.id = id


    if(db.get(id) == undefined){
        res.json({
            message : "해당 정보가 없습니다."
        })
    } else{        
        res.json(youtuber)
    }
})

app.use(express.json()) // http 관련 미들웨어 모듈 설정 => json
// 새롭게 등록 => Map(db)에 저장(set) 해야함
app.post('/youtubers', function(req,res){
    console.log(req.body)
    db.set(id++, req.body)

    res.json({
        // 방법 1
        // message : req.body.channelTitle + " 님 유튜버로써의 성장을 기원합니다."
        
        // 방법 2
        // message : db.get(4).channelTitle + " 님 유튜버로써의 성장을 기원합니다."

        // 방법 1,2 고도화 => 템플릿 문자열 사용
        message : `${db.get(id-1).channelTitle} 님 유튜버로써의 성장을 기원합니다.`
    })
})

// app.delete('/youtubers/:id', function(req,res){
//     let {id} = req.params
//     id = parseInt(id)

//     var youtuber = db.get(id)    
//     if(youtuber == undefined){
//         res.json({
//             message : `요청하신 ${id}번은 없는 유튜버입니다.`
//         })
//     } else{        
//         const tempName = youtuber.channelTitle
//         db.delete(id)

//         res.json({
//             message : `${tempName} 님, 다음에 뵙겠습니다!!"`
//         })
//     }
// })

// if 와 else단의 흐름 반대로 작성하기
// 부정 경우 > 나머지 보다 긍정 경우 > 나머지가 더 직관적이다.

app.delete('/youtubers/:id', function(req,res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)    
    if(youtuber){        
        const tempName = youtuber.channelTitle
        db.delete(id)

        res.json({
            message : `${tempName} 님, 다음에 뵙겠습니다!!"`
        })
    }else{
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } 
})


app.delete('/youtubers', function (req,res){
    // db에 값이 1개 이상이어야, 전체 삭제
    // 값이 없으면, 오류메시지
    var msg = ""
    if(db.size >= 1){
        db.clear()
        msg = "전체 유튜버가 삭제되었습니다."        
    } else{
        msg = "삭제할 유튜버가 없습니다."
    }

    res.json({
        message : msg
    })
})

app.put('/youtubers/:id', function(req,res){
    let {id} = req.params
    id = parseInt(id)

    var youtuber = db.get(id)
    if(youtuber == undefined){
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다.`
        })
    } else{        
        const oldChannelTitle = youtuber.channelTitle
        const newChannleTitle = req.body.channelTitle

        youtuber.channelTitle = newChannleTitle
        db.set(id, youtuber)

        res.json({
            message : `${oldChannelTitle}님, 채널명이 ${newChannleTitle}로 변경되었습니다.`
        })
    }
})