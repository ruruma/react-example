import React, { useState } from 'react';

export default function SimpleCounter() {
  const [counter, setCounter] = useState(0);
  console.log(setCounter);

  function incrementCounter() {
    console.log(setCounter);
    setCounter((counter) => counter + 1);
  }

  function dicrementCounter() {
    setCounter((counter) => counter - 1);
  }

  return (
    <>
      <h1>Simple Counter</h1>
      <div>
        <button onClick={incrementCounter}>+</button>
        <span>{counter}</span>
        <button onClick={dicrementCounter}>-</button>
      </div>
    </>
  );
}
