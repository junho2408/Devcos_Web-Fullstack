function first(){
    console.log("첫 번째")
}

function second(){
    console.log("두 번째")
}

function third(){
    console.log("세 번째")
}

first();
// serTimeout(second, 2000);
setTimeout(second, 2000);
// second();
third();