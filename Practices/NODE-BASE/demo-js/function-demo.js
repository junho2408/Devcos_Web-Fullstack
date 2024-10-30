// // 방법 1.
// function add1(x,y){
//     return x+y
// }

// // 방법 2.
// let add2 = function(x,y){
//     return x+y
// }

// // 방법 3.
// // = 화살표 함수(arrow function)
// const add3 = (x,y) => {
//     return x+y
// }

// // 방법 4.
// var add4 = (x,y) => x + y

// console.log("방법1 : " + add1(5,10))
// console.log("방법2 : " + add2(5,10))
// console.log("방법3 : " + add3(5,10))
// console.log("방법4 : " + add4(5,10))

if(true){    
    function add1(x,y){
        return x+y
    }
    
    add2 = function(x,y){
        return x+y
    }

    var add2_1 = function(x,y){
        return x+y
    }

    let add2_2 = function(x,y){
        return x+y
    }

    const add2_3 = function(x,y){
        return x+y
    }
}

console.log(add1(4,5))
console.log(add2(4,5))
console.log(add2_1(4,5))
console.log(add2_2(4,5))
console.log(add2_3(4,5))
