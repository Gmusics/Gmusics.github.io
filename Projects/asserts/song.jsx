import React from 'react';
import files from 'files.js';

const img = files.map(url => url.pic);
const tittle = files.map(des => des.tittle);
const artist = files.map(art => art.artist);

const ArtistBanner = () => {
    return (
      <div id="track-cont">
        <img src="{img}" alt="atiste" id="cover-photo" />
        <div className="song-desc"> 
          <a href="#" target="_blank"> {tittle}</a>
          <h3>{artist}</h3>
        </div>
      </div>

    )
};

//export default ArtistBanner;