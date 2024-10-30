// map 함수(메서드)

const arr = [1,2,3,4,5,6,7,8,9,10]
const values = ["one","two","three","four","five","six","seven","eight","nine","ten"]

// foreach, map 뒤에는 콜백함수를 넣는다
// 무슨 일? 객체(또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수임

// 배열의 경우
const foreachArr = arr.forEach(function(a,b,c){
    // console.log(`a : ${a}, b : ${b}, c : ${c}`)
    return a*2
})

const mapArr = arr.map(function(a,b,c){
    // console.log(`a : ${a}, b : ${b}, c : ${c}`)
    return a*2
})

console.log(`foreach 리턴 : ${foreachArr},
    map 리턴 : ${mapArr}`)
// foreach는 딱히 객체를 리턴하지 않고,
// map은 객체를 만들어서 리턴해줌.