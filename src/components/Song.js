import React from 'react'
import { Link } from 'react-router-dom';

export const Song = (props) => {

    const song = props.song;



  return (
    <div>
        <div>
            <h4>{song.artistName}</h4>
            <div><img src={song.artworkUrl100} alt='artwork' /></div>
            <div>Track Name : {song.trackName}</div>
            <div>Price : {song.trackPrice} {song.currency}</div>
            <div>
               <Link to='/preview' state={song}><button className='btn btn-sm btn-primary'>Song Preview</button></Link>
            </div>
        </div>
    </div>
  )
}
