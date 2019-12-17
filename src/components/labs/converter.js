import React, { useState, useEffect } from 'react';
import { intersectionBy } from 'lodash';
import Axios from 'axios';
import './converter.scss';

export const Converter = () => {
  const [pair, setPair] = useState(null);
  const [valueByn, setValueByn] = useState(0);
  const [valueRate, setValueRate] = useState(0);
  const [rates, setRates] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  const loadCurrencies = async () => {
    const { data } = await Axios.get(
      'http://www.nbrb.by/API/ExRates/Currencies'
    );
    return data;
  };

  const loadRates = async pairCode => {
    const { data } = await Axios.get(
      'http://www.nbrb.by/api/exrates/rates?periodicity=0'
    );
    return data;
  };

  const calculateRate = () => {
    console.log(pair, valueByn);
    const coeff = rates.find(({ Cur_ID }) => Cur_ID == pair);
    if (coeff) {
      setValueRate(
        parseFloat(
          (coeff.Cur_OfficialRate * valueByn) / coeff.Cur_Scale
        ).toFixed(2)
      );
    }
  };

  const loadData = async () => {
    const loadedRates = await loadRates();
    const currs = await loadCurrencies();
    const newCurrencies = intersectionBy(loadedRates, currs, 'Cur_ID');
    console.log(loadedRates, currs, newCurrencies);
    setCurrencies(newCurrencies);
    setRates(loadedRates);
    setPair(loadedRates[0].Cur_ID);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    calculateRate();
  }, [pair, valueByn]);

  return (
    <div>
      <h3>Конвертер валют</h3>
      <div className="currency">
        <select
          name="currrency-first"
          id=""
          onChange={e => setPair(e.target.value)}
        >
          {currencies.map(({ Cur_Name, Cur_ID }) => (
            <option key={Cur_ID} value={Cur_ID} onClick={() => setPair(Cur_ID)}>
              {Cur_Name}
            </option>
          ))}
        </select>

        <input
          value={valueByn}
          onChange={e => {
            setValueByn(parseFloat(e.target.value) || 0);
          }}
          className="input-byn"
          type="number"
        />
      </div>
      <br />
      <div className="currency">
        <h5>BYN</h5>
        <input
          value={valueRate}
          disabled
          className="input-second"
          type="number"
        />
      </div>
    </div>
  );
};
