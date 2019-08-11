import React from 'react';
import './bday.scss';
import users from './users.json';
import { connect } from 'redux-bundler-react';
const location = 'Минск, Мирная улица, 9';
const date = '14.09.2019';
const getThere = 'На общ. транспорте - от ст. м. Могилевская 12 минут';
const BDay = ({ doUpdateUrl }) => {
  const userId = new URLSearchParams(window.location.search).get('user');
  const message = users[userId];

  if (!message) {
    doUpdateUrl('/');
  }

  return (
    <div className="bday-container">
      <h1>Привет! Я приглашаю тебя на день рождения!</h1>

      <span className="cake" role="img" aria-label="cake">
        🎂
      </span>

      <div className="tab personal-message">
        <h2>Персональное сообщение:</h2>
        <p>{message}</p>
        <p>
          Твоя ссылка что бы не потерять ничего:{' '}
          <a href={window.location.href}>{window.location.href}</a>
        </p>
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
          <br />
          <a href="https://yandex.by/maps/157/minsk/?from=api-maps&ll=27.720132%2C53.841168&mode=routes&origin=jsapi_2_1_74&rtext=53.861356%2C27.675548~53.822970%2C27.764717&rtt=mt&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D144459207829~&z=13">
            Карта
          </a>
        </div>
        <div className="tab">
          <h4>Расписание:</h4>
          <span>Собираемся к 17:00</span>
        </div>
        <div className="tab">
          <h4>Отказы не принимаются</h4>
          <a href="https://t.me/joinchat/Ex3DMhEXgqQMer1b-tFsrQ">telegram чат участников</a>
        </div>
        <div className="tab">
          <h4>Подарки принимаются (но не обязательнo)</h4>
          <a href="https://docs.google.com/spreadsheets/d/1km80VUQVJ9SfRDj2lC2ey0tqhiGUKyZmtY25K3Y_Z2w/edit?usp=sharingnpm s">
            Если ловишь затуп и не знаешь что дарить
          </a>
        </div>
      </div>
    </div>
  );
};
export default connect(
  'selectRoute',
  'selectPathname',
  'doUpdateUrl',
  BDay
);
