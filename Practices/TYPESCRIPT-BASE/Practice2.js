// Any, Union, 타입 가드, spread 연산자
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Any
var anyVal = 100;
anyVal = "something string";
anyVal = true;
var unionVal;
var item;
// 타입 오퍼레이터 [타입 가드]
function convertToString(val) {
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString("123"));
console.log(convertToNumber("456789"));
// Spread 연산자
var firstArray = [1, 2, 3, 4];
var secondArray = [5, 6, 7, 8];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
;
