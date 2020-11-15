import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import files from './asserts/files.jsx';

function Components() {
  return (
    <main>
      <Contact />
      <Header />
      <Search />
      <Banner />
    </main>
  )
}
const Banner = () => {
  return (
    <div className="main-container">
  {files.map(file=> {
    const {img, artist,tittle,id} = file
    return <div key={id}>
    <Track {...file}></Track>
    </div>
    })}
  </div>
  )
};

const Track = (props) => {
  const { img, tittle, artist } = props
  return (
    
    <div id="track-cont">
      <img src={img} alt="atiste" id="cover-photo"/>
      <div className="song-desc"> 
        <a href="#" target="_blank">{tittle}</a>
        <h3>{artist}</h3>
      </div>
    </div>
  )
};
const Contact = ()=>{
  return <div class="contact"></div>
}
const Header = () => {
  return (
    <header className="header">
      <hr/>
      <a href="#" className="nav">Home</a>
      <hr/>
      <a href="#" className="nav">Album</a>
      <hr/>
      <a href="#" className="nav">EP</a>
      <hr/>
      <a href="#" className="nav">Top Hits</a>
    </header>
  )
};

const Search = () => {
  return (
    <div className="search-container">
      <input type="search" name="" id="search" placeholder="search this site" />
      <button className="search-button">search</button>
    </div>
  )
};
export default Components;
//