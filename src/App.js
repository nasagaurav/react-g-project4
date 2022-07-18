import React from 'react';
import axios from 'axios';
const url =
  'https://my-project-g1-2f9a0-default-rtdb.firebaseio.com/users.json';

export default function App() {



  return (
    <div>
      <h1>stalkblitz</h1>
      <p>
        get data from firebase ,copy url prefix users/json.write axios in
        dependencies so thet it will install axios package..
      </p>

      <button>post request</button>
    </div>
  );
}
