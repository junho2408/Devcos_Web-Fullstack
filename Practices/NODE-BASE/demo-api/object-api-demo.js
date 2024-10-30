const express = require('express')
const app = express()

app.listen(1234)

// https://www.youtube.com/@shacotime0
// https://www.youtube.com/@똥그랩
// https://www.youtube.com/@soolhouse

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

app.get('/:nickname', function(req,res){

    const {nickname} = req.params
    console.log(nickname)

    if(nickname == "@shacotime0"){
        res.json(youtuber1)
    } else if(nickname == "@똥그랩"){
        res.json(youtuber2)
    } else if(nickname == "@soolhouse"){
        res.json(youtuber3)
    } else{
        res.json({
            message : "잘못된 주소 : 알 수 없는 개체"
        })
    }
})