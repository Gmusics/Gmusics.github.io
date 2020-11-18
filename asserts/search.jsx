import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import files from './files.jsx';


export const SearchBar = (props) => {
  //const [img,title,artist] = props
  const [lookFor, setLookFor] = useState('')

  const onInputChange = (event) => {
    setLookFor(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    filtered();
    const result = filteredResult.map(item => item);
    console.log(result);
  };
  //const regex = RegExp(/\w/)
  const filtered = () => {
    files.filter(item => {
      if (item.artist.toLowerCase().includes(lookFor.toLowerCase()) || item.title.toLowerCase().includes(lookFor.toLowerCase()) === true) {
        console.log('result');
        return filteredResult.push(item);
      }
      else if (item.artist.toLowerCase().includes(lookFor.toLowerCase()) || item.title.toLowerCase().includes(lookFor.toLowerCase()) === false) {
        console.log('search not found');
        return 'search not found';
      };
    });
};
    const filteredResult = [];

    return (
      <div>
           <form
            onSubmit={onFormSubmit}
            className="search-container">
            <input
              className="search"
              id="search"
              type="search"
              placeholder = "search this site"
              onChange={onInputChange}
              value={lookFor}/>
          
              <button type="submit" 
              className="search-button">
              submit
              </button>
          </form> 
    </div>
    );
};


  const searchPage = (props) => {
    const [img, title, artist] = props
    return (
      <div id="track-cont">
          <img src={img} alt="atiste" id="cover-photo"/>
          <div className="song-desc"> 
            <a className="link" href="#" target="_blank">{title}</a>
            <h3>{artist}</h3>
          </div>
        </div>
    )
  };

//