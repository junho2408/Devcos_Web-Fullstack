const keys = [1,2,3,4,5,6,7,8,9,10]
const values = ["one","two","three","four","five","six","seven","eight","nine","ten"]

// foreach 뒤에는 콜백함수를 넣는다
// 무슨 일? 객체(또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수임

// 배열의 경우
keys.forEach(function(a,b,c,d){
    // console.log(`a : ${a}, b : ${b}, c : ${c}, d : ${d}`)
    // a : 데이터
    // b : 인덱스
    // c : 객체 통째로
    // d ~ : undefined
})

// map의 경우
// let map = new Map
// keys.forEach(function(a){
//     map.set(a, values[a-1])
// })

// 동일 표현 
// let map = new Map(keys.map((key, index) => [key, values[index]]));

map.forEach(function(value,key,object){
    console.log(`value : ${value}, key : ${key}, object : ${object}`)
})