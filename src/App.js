import React, { useRef } from 'react';
import axios from 'axios';
const url =
  'https://my-project-g1-2f9a0-default-rtdb.firebaseio.com/users.json';

export default function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const add = () => {
    const data = {
      name: 'ref1.cuurent.value',
      email: 'ref2.current.value',
      gender: 'ref3.current.value',
    };
    axios
      .post(url, data)
      .then((res) => res, data)
      .then((d) => console.log(d))
      .catch((e) => console.log('err', e))
      .finally(() => {
        console.log('finally');
        ref1.cuurent.value = '';
        ref2.cuurent.value = '';
        ref3.cuurent.value = '';
      });
  };

  return (
    <div>
      <h1>stalkblitz</h1>
      <input ref={ref1} placeholder="name" />
      <input ref={ref2} placeholder="email" />
      <input ref={ref3} placeholder="gender" />

      <button onclick={add}>add this</button>
    </div>
  );
}
