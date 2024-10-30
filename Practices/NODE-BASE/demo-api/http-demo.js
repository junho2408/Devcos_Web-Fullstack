let http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8888);
// http 모듈에 createServer 함수에서 할일을 다 수행한 다음,
// onReqest 콜백 함수를 실행시키도록 매개변수로 던진다.