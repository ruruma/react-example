import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounter from './SimpleCounter';
import EffectHook from './EffectHook';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SimpleCounter /> */}
    <EffectHook />
  </React.StrictMode>,
  document.getElementById('root')
);
