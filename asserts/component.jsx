import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import files from './files.jsx';

export const Banner = () => {
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
        <a className="link" href="#" target="_blank">{tittle}</a>
        <h3>{artist}</h3>
      </div>
    </div>
  )
};
export const Contact = () => {
  return <div className="contact">
 <a> <i className="fab fa-whatsapp"></i></a>
 <a> <i className="fab fa-instagram"></i></a>
 <a> <i className="fab fa-facebook"></i></a>
  </div>
}

export const Header = () => {
  return (
    <header className="header">
      <hr/>
      <a href="#" className="nav link">Home</a>
      <hr/>
      <a href="#" className="nav link">Album</a>
      <hr/>
      <a href="#" className="nav link">EP</a>
      <hr/>
      <hr></hr>
      <a href="#" className="nav link">Top Hits</a>
    </header>
  )
};

export const Ads = () => {
  return (
    <div className="ads">
      <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iste voluptatibus deleniti eveniet maxime vel veritatis veniam, quia, eum eligendi magni necessitatibus corporis adipisci rerum quas ea deserunt culpa ex.</span>
      <span>Corrupti adipisci soluta maxime totam explicabo nobis! Necessitatibus quos architecto rem deserunt sapiente iusto, cupiditate quibusdam consequuntur incidunt quam optio porro numquam laboriosam eaque veniam animi amet sunt itaque. Ducimus?</span>
      <span>Magnam sit fugit reiciendis animi a cumque earum obcaecati, soluta sed veniam voluptatem rem sequi repudiandae facere iusto aut nulla impedit perferendis nam. Illum reprehenderit, iure ratione veniam quas quasi.</span>
      <span>Eveniet maiores aspernatur iusto, animi iste aperiam earum alias recusandae excepturi quae labore, eos eum fugiat iure ut velit esse adipisci atque omnis consequuntur laboriosam minus ratione quibusdam. Minus, voluptatum.</span>
      <span>Modi dolorem delectus repellat rem excepturi totam, quam, porro deserunt itaque consequuntur odio officia qui blanditiis. Aut possimus, odit voluptatem ut aperiam blanditiis, pariatur molestiae facilis saepe sunt veritatis delectus.</span></p>
    </div>
  )
};

//