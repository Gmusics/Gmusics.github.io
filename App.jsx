import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Contact, Header, Banner, Ads } from './asserts/component.jsx';
import { SearchBar, SearchPage } from './asserts/search.jsx';

const App = () => {
 
  return (
    <div>
    <Header />
    <SearchBar />
    <Banner /> 
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('container'));
//