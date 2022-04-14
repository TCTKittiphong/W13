import React, { useState, useEffect } from 'react'
import {Song} from './Song'

export const Home = (props) => {

    const [musicList, setMusicList] = useState(props.songs);

    useEffect(() => {
        setMusicList(props.songs);
    }, [props.songs])

  return (
    <div>
        {
            musicList.map((song, id ) => {
                return <Song song={song} key={id}/>
            })
        }
    </div>
  )
}
