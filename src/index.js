import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounter from './SimpleCounter';
import EffectHook from './EffectHook';
import EffectHookWindow from './EffectHookWindow';
import UseMemoHook from './UseMemoHook';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SimpleCounter /> */}
    {/* <EffectHook /> */}
    {/* <EffectHookWindow /> */}
    <UseMemoHook />
  </React.StrictMode>,
  document.getElementById('root')
);
