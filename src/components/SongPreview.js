import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SongPreview = (props) => {

    const location = useLocation();
    const song = location.state;
    const navigate = useNavigate();

  return (
    <div>
        <h2>{song.artistName}</h2>
        <div>
            <img src={song.artworkUrl100} alt='artwork' />
            <div>Track Name : {song.trackName}</div>
        </div>
        {
            song.kind==="song"?(
                <audio controls="controls" autoPlay="autoPlay">
                    <source src={song.previewUrl} type="audio/mp4" />
                </audio>
            ):(
                <video controls="controls" width={600} autoPlay="autoPlay">
                    <source src={song.previewUrl} type="video/mp4" />
                    Your Browser does not support video tag.
                </video>
            )
        }
        <div>
            <button className='btn btn-sm bg-primary'
            onClick={() => navigate(-1) }>Back to song list</button>
        </div>
    </div>
  )
}
