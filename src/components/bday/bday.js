import React from 'react';
import './bday.scss';
import users from './users.json';
import { connect } from 'redux-bundler-react';
const location = 'Address';
const date = '12.09.1998';
const getThere = 'inf';
const BDay = ({doUpdateUrl}) => {

  const userId = new URLSearchParams(window.location.search).get('user');
  const message = users[userId]; 

  if (!message) {
    doUpdateUrl('/');
  }

  return (<div className="bday-container">
    <h1>Привет! Я приглашаю тебя на день рождения!</h1>

    <span className="cake" role="img" aria-label="cake">
      🎂
    </span>

    <div className="tab personal-message">
      <h2>Персональное сообщение:</h2>
      <p>{message}</p>
      <p>Твоя ссылка что бы не потерять ничего: <a href={window.location.href}>{window.location.href}</a></p>
    </div>

    <div className="info">
    <h2>Информация</h2>
      <div className="tab">
        <h4>Когда?</h4>
        <span>{date}</span>
      </div>
      <div className="tab">
        <h4>Где?</h4>
        <span>{location}</span>
      </div>
      <div className="tab">
        <h4>Как добраться?</h4>
        <span>{getThere}</span>
        <a href="#">Карта:</a>
      </div>
      <div className="tab">
        <h4>Расписание:</h4>
      </div>
      <div className="tab">
        <h4>Отказ не принимаются</h4>
      </div>
      <div className="tab">
        <h4>Подарки принимаются (но не обязательнo)</h4>
        <a href="https://docs.google.com/spreadsheets/d/1km80VUQVJ9SfRDj2lC2ey0tqhiGUKyZmtY25K3Y_Z2w/edit?usp=sharing">Если ловишь затуп и не знаешь что дарить</a>
      </div>
    </div>
  </div>
)};
export default connect(
  "selectRoute",
  "selectPathname",
  "doUpdateUrl",
  BDay
);
