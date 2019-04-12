import { createAsyncResourceBundle, createSelector } from "redux-bundler";
import Axios from "axios";
// export default {
//   name: 'crypto',
//   reducer: (state = [], action) => {
//     return state;
//   },
//   doUpdateCoins: () => ({ dispatch, apiFetch }) => {
//     dispatch({ type: 'COINS_UPDATE_STARTED' });
//     apiFetch('https://api.binance.com/api/v3/ticker/price', { type: 'GET' })
//       .then(res => {
//         dispatch({ type: 'COINS_UPDATE_FINISHED', payload: res });
//       })
//       .catch(err => {
//         dispatch({ type: 'COINS_UPDATE_FAILED', payload: err });
//       });
//   },
//   init: store => {
//     store.doUpdateCoins();
//   }
// };

const bundler = createAsyncResourceBundle({
  name: "crypto",
  staleAfter: 4000,
  getPromise: async () => {
    const response = await Axios.get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC,EOS&tsyms=USD&api_key=c39141df8238476bdf9062db9ffc3e14494cd217b3f39b35d733071aaf5771cd",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  }
});
bundler.selectRawCrypto = createSelector(
  "selectCrypto",
  crypto => (crypto ? crypto.RAW : crypto)
);
bundler.selectDisplayCrypto = createSelector(
  "selectCrypto",
  crypto => (crypto ? crypto.DISPLAY : crypto)
);
bundler.reactCryptoFetch = createSelector(
  "selectCryptoShouldUpdate",
  "selectPathname",
  (shouldUpdate, pathname) => {
    if (shouldUpdate && pathname === "/crypto") {
      return { actionCreator: "doFetchCrypto" };
    }
  }
);
export default bundler;
