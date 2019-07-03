import React from 'react';
import './bday.scss';
const message = 'dfgdfg';
const location = 'Address';
const date = '12.09.1998';
const getThere = 'inf';
const BDay = () => (
  <div className="bday-container">
    <h1>Привет! Я приглашаю тебя на день рождения!</h1>

    <span className="cake" role="img" aria-label="cake">
      🎂
    </span>

    <div className="tab personal-message">
      <h2>Персональное сообщение:</h2>
      <p>{message}</p>
      <p>Твоя ссылка что бы не потерять ничего: <a href="#">{'href'}</a></p>
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
        <h4>Отказы не принимаются</h4>
      </div>
      <div className="tab">
        <h4>Подарки принимаются (но не обязательны)</h4>
        <a href="#">Если ловишь затуп и не знаешь что дарить</a>
      </div>
    </div>
  </div>
);
export default BDay;
