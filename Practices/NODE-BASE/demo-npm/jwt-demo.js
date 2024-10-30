var jwt = require('jsonwebtoken'); //jwt 모듈 소환
var dotenv = require('dotenv'); // dotenv 모듈 소환

dotenv.config();

// 환경 변수가 제대로 설정되었는지 확인
console.log('PRIVATE_KEY:', process.env.PRIVATE_KEY);

var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);
// token 생성 <= jwt 서명을 했다 (페이로드, 개인의 암호키) + SHA256 알고리즘
console.log(token)

var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
console.log(decoded) // bar