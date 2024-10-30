const obj1 = {}
const obj2 = {message : "Is empty?"}
const num = 1
const str = "two"

console.log(Object.keys(obj1), isEmpty(obj1))
console.log(Object.keys(obj2), isEmpty(obj2))

// 문자열도 '객체'다
console.log(Object.keys(num), isEmpty(num))
console.log(Object.keys(str), isEmpty(str))

function isEmpty(obj) {
    if(Object.keys(obj).length === 0){
        return true;
    } else {
        return false;
    }
}