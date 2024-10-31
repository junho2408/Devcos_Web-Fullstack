import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*
  작성자 : 김모씨
  작성일 : 2024.10.31
  내용 : jsx 문법 예제
*/}

function App() {
  const name = "리액트";
  let printHello = true;
  const port = undefined;

  // 인라인 스타일링
  const style = {
    backgroundColor : '#61dafb',
    color : 'white',
    fontsize : '32px',
    fontWeight : 'bold',
    padding : '20px'
  };
  return (
    <div className="container">
      <div>port : {port || "3000"}</div>
      <h1 style={style}>HELLO, {name} </h1>
      {printHello ? <p>Hello everyone,</p> : null}
      <p>Nice to meet you all</p>
    </div>
  );
}

export default App;
