import React from 'react'

const files = [
  {
    artist: 'my name',
    tittle: 'my song',
    song: 'my_song.mp3',
    pic: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
  },
  ];
  
const img = files.map(url => url.pic);
const tittle = files.map(des => des.tittle);
const artist = files.map(art => art.artist);
export default files;
//