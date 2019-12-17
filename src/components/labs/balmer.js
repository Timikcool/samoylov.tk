/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import './balmer.scss';

const Balmer = () => {
  // false represents man cuz man always right
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(80);

  const calculate = () => {
    const coefficient = gender === 'male' ? 0.7 : 0.6;
    const spirt = parseInt(1.14 * weight * coefficient);
    const vodka = parseInt(spirt / 0.4);
    const beer = parseInt(spirt / 0.06);
    const port = parseInt(spirt / 0.17);
    const wine = parseInt(spirt / 0.13);
    const sake = parseInt(spirt / 0.2);
    return { spirt, vodka, beer, port, wine, sake };
  };

  const [result, setResult] = useState(calculate());

  useEffect(() => {
    setResult(calculate());
  }, [gender, weight]);

  return (
    <div className="balmer">
      <h3>Расчёт Пика Балмера</h3>
      <div className="weight">
        <h5>Ваш вес в кг:</h5>
        <input
          className="weight-input"
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div className="gender">
        <h5>Ваш пол:</h5>
        <button
          onClick={() => setGender('male')}
          className={`age-btn male ${gender === 'male' ? 'active' : ''}`}
        >
          👨♂️
        </button>
        <button
          onClick={() => setGender('female')}
          className={`age-btn female ${gender === 'female' ? 'active' : ''}`}
        >
          👩♀️
        </button>
      </div>

      <div className="result">
        {Object.keys(result).map(alc => (
          <span>{`${alc} ${result[alc]}gr`}</span>
        ))}
      </div>
    </div>
  );
};

export default Balmer;
