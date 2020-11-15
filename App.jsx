import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Components from './component.jsx';

const App = () => {
  return (
    <div>
    <Components />
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('container'));
//