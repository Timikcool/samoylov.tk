import React, { useEffect, useState } from 'react';
import axios from 'axios';

const personalData = () => {
  useEffect(() => {
    const getPersonalData = async () => {
      const { data } = await axios.get(`https://api.ipify.org`);
      const response = await axios.get(
        `https://api.hackertarget.com/geoip/?q=${data}`
      );
      setPersonalData(response.data);
    };

    getPersonalData();
  }, []);

  const [personalData, setPersonalData] = useState('Загрузка...');
  return (
    <div>
      <p>{personalData}</p>
    </div>
  );
};

export default personalData;
