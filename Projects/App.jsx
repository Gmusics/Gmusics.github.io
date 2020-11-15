import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.jsx'; 
const App = () => {
  return (
<div>
  <Banner />
  <Banner />
</div>

  )
};

ReactDOM.render(<App />, document.getElementById('container'));
//