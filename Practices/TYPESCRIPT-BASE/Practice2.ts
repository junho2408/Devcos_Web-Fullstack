// Any, Union, 타입 가드, spread 연산자

// Any
let anyVal: any = 100;
anyVal = "something string";
anyVal = true;

// Union

// 타입 alias
type numOrStr = number | string;

let unionVal: numOrStr;
let item: number;

// 타입 오퍼레이터 [타입 가드]
function convertToString(val: numOrStr): string {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }
  return String(val);
}

function convertToNumber(val: numOrStr): number {
  return Number(val);
}

console.log(convertToString("123"));
console.log(convertToNumber("456789"));

// Spread 연산자
let firstArray = [1, 2, 3, 4];
let secondArray = [5, 6, 7, 8];

let combineArray = [...firstArray, ...secondArray];

for (let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
};