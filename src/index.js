import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounter from './SimpleCounter';
import EffectHook from './EffectHook';
import EffectHookWindow from './EffectHookWindow';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SimpleCounter /> */}
    {/* <EffectHook /> */}
    <EffectHookWindow />
  </React.StrictMode>,
  document.getElementById('root')
);
