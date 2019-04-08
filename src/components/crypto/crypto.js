import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particles.config.json';
import { connect } from 'redux-bundler-react';
import moment from 'moment';
import CoinTicker from './CoinTicker';
import './crypto.scss';
const Crypto = ({ rawCrypto, displayCrypto }) => {
  console.log(rawCrypto, displayCrypto);
  const pizzaDay = moment('2010-05-22');
  const days = moment().diff(pizzaDay, 'days');
  const pizzaPrice = rawCrypto ? 10000 * rawCrypto.BTC.USD.PRICE : null;
  const pizzaCount = rawCrypto ? pizzaPrice / 30 : null;
  const coins = displayCrypto ? Object.keys(displayCrypto) : null;
  return (
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
      <Particles
        canvasClassName="particles"
        className="particles-container"
        params={particlesConfig}
      />
    </div>
  );
};
export default connect(
  'selectRawCrypto',
  'selectDisplayCrypto',
  Crypto
);
