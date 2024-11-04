import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Clock from './Timer';
import MyWeather from './MyWeather';

{/*
  작성자 : 김준호
  작성일 : 2024.10.31
  내용 : jsx 문법 예제
*/}

function App() {
  return (
    <div>
      <TodoList></TodoList>
      {/* <Clock></Clock> */}
      {/* <MyWeather weather='맑음'>일기예보</MyWeather> */}
    </div>
  );
}

export default App;
