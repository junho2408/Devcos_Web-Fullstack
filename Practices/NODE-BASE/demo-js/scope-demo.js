if(true){
    var num1 = 7;
    const num2 = 3; // 블록 {} 스코프 안에서만 읽는다
    let num3 = 21; // 블록 {} 스코프 안에서만 읽는다

    console.log(num1 + " X " + num2 + " = " + num3);
    console.log(`${num1} X ${num2} = ${num3}`);
    // 템플릿 문자열
}

console.log(num1)

// console.log(num2)
// console.log(num3)