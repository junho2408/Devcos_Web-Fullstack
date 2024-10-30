// const express = require('express')
// const app = express()

// app.listen(1234)

// app.get('/products/:n', function(req,res){
//     // : 표기 => URL로 매개변수를 전달해줄 것임을 표시
//     // req.params에 매개변수의 모든 값을 담는다.
//     // products/__ 빈칸에 오는 값을 n이라는 변수에 담는다
//     // console.log(req.params)
//     // console.log(req.params.n)

//     let number = parseInt(req.params.n) - 10
//     console.log(number)

//     res.json({
//         num : number
//     })
// })

// // app.get('/:nickname', function(req,res){

// //     const param = req.params

// //     res.json({
// //         channel : param.nickname
// //     })
// // })

// app.get('/watch', function(req,res){
//     const q = req.query
//     console.log(q)

//     const {v,t} = req.query
//     console.log("video : " + v)
//     console.log("timeline : " + t)
// })

// // res.json({
// //     "영상코드" : q.v,
// //     "시작지점" : q.t
// // })
// // https://www.youtube.com/watch?v=tqtFY5VAE4M
// // https://www.youtube.com/watch?v=yfP87sVfWQU&t=327s