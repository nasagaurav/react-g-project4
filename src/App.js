import React from 'react';
import axios from 'axios';
const url =
  'https://my-project-g1-2f9a0-default-rtdb.firebaseio.com/users.json';

export default function App() {
  const handleClick = () => {
    const data = {
      name: 'sabha sanghwan',
      email: 'sanghwan_sabha@gmail.com',
      gender: 'female',
    };

    axios
      .post(url, data)
      .then((res) => res.data)
      .then((d) => console.log('after adding', d))
      .catch((e) => console.log('after err', e))
      .finally(() => console.log('finally'));
  };

  return (
    <div>
      <h1>stalkblitz</h1>
      <p>
        get data from firebase ,copy url prefix users/json.write axios in
        dependencies so thet it will install axios package
      </p>

      <button onClick={handleClick}>post request</button>
    </div>
  );
}
