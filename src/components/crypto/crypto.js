import React from "react";
import { connect } from "redux-bundler-react";
import moment from "moment";
import CoinTicker from "./CoinTicker";
import "./crypto.scss";
import pets from "./pet-projects.json";
import Pet from "./pet";

const Crypto = ({ rawCrypto, displayCrypto }) => {
  const pizzaDay = moment("2010-05-22");
  const days = moment().diff(pizzaDay, "days");
  const pizzaPrice = rawCrypto ? (10000 * rawCrypto.BTC.USD.PRICE) / 2 : null;
  const pizzaCount = rawCrypto ? pizzaPrice / 30 : null;
  const coins = displayCrypto ? Object.keys(displayCrypto) : null;

  return (
    <div className="crypto-container">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="crypto">
        <h2 className="glitch" data-text="Crypto Room">
          Crypto Room
        </h2>

        <p className="pizza-text">
          {`${days} days ago, a programmer Laszlo Hanyecz purchased two large Papa
        John’s pizzas for 10,000 bitcoins, worth about $30 at the time. It’s
        widely believed to be the first purchase of a product with bitcoin,
        proving the then-nascent cryptocurrency’s potential as a means of
        payment. `}
          (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bitcointalk.org/index.php?topic=137.0"
          >
            bitcointalk thread
          </a>
          )
        </p>

        {pizzaPrice && (
          <div className="pizza-price">
            <h3>Current Laszlo's pizza price</h3>
            <p>{Math.round(pizzaPrice)}$</p>
          </div>
        )}

        {pizzaCount && (
          <div className="pizza-count">
            <h3>Pizzas could be bought now</h3>
            <p>{Math.round(pizzaCount)}</p>
          </div>
        )}

        {coins && (
          <div className="coins">
            {coins.map(coin => (
              <div className={`coin ${coin}`} key={coin}>
                <div className="coin-ticket">{<CoinTicker coin={coin} />}</div>
                <p className="coin-name">{coin}</p>
                <p className="coin-price">{displayCrypto[coin].USD.PRICE}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pet-projects">
          <h4>
            Few of my pet-projects <span>(not only in crypto)</span> that under
            deveopment or just mantaince
          </h4>
          <ul className="pet-list">
            {pets.map(props => (
              <li className="pet-item" key={props.title}>
                <Pet {...props} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect("selectRawCrypto", "selectDisplayCrypto", Crypto);
