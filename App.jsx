import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './asserts/search.jsx'
import {Contact, Header, Banner, Ads} from './asserts/component.jsx';

const App = () => {
  return (
    <div>
      <Contact /> 
      <Ads />
      <Header />
      <SearchBar /> 
      <Banner />
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('container'));
//
