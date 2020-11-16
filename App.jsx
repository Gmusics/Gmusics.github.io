import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Contact, Header, Search, Banner, Ads} from './component.jsx';

const App = () => {
  return (
    <div>
      <Contact /> 
      <Ads />
      <Header />
      <Search /> 
      <Banner />
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('container'));
//
