import React, { useState, useMemo } from 'react';

export default function UseMemoHook() {
  const [value, setValue] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNum = useMemo(() => slowfuncton(value), [value]);

  const styleTheme = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };
  return (
    <div>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={styleTheme}>{doubleNum}</div>
    </div>
  );
}

function slowfuncton(num) {
  for (let index = 0; index < 1000000000; index++) {}
  return num * 2;
}
