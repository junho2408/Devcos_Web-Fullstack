var figlet = require("figlet");

figlet("Kim junho!!", function (err, data) {
    // 익명의 함수를 쓰는 이유 = 이 함수를 쓸 일이 다른 곳은 없기 때문.
    // 모듈(figlet)을 만든 사람이, 매개변수로 함수를 받기로 했기 때문.
    // 첫번째 배개변수(문자열)을 받아서 수행하고,
    // 두번째 매개변수 function 함수를 실행한다 == 콜 백
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});