import React from 'react'

const files = [
  {
    id:1,
    artist: 'first artist',
    title: 'fisrt artist song',
    song_url: 'my_song.mp3',
    img: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
  },
    {
      id: 2,
      artist: 'second artist',
      title: 'Way To Fly',
      song_url: 'my_song.mp3',
      img: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    },
  ];
  let searcher = 'first'
let lookUp = files.filter(item =>{
  if (item.artist.includes('')||item.tittle.includes('')){
    return true;
  }
  return false;
},[]);
//console.log(lookUp);
export default files;
//