import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Song = (props) => {
  const song = props.song;

  const Conteiner = styled.div`
    display: flex;
    padding: 20px;
  `;

  const NameSong = styled.h4`
    display: flex;
    flex: 1;
  `;

  const Img = styled.img`
    margin-right: 20px;
    width: 10%;
    height: 10%;
  `;

  const TrackName = styled.div`
    flex: 1;
  `;

  const Price = styled.div`
    flex: 1;
  `;

  return (
    <div>
      <Conteiner className="w3-container w3-center w3-animate-bottom">
        <NameSong>{song.artistName}</NameSong>
        <Img src={song.artworkUrl100} alt="artwork" />
        <TrackName>Track Name : {song.trackName}</TrackName>
        <Price>
          Price : {song.trackPrice} {song.currency}
        </Price>
        <div>
          <Link to="/preview" state={song}>
            <button className="btn btn-sm btn-primary">Song Preview</button>
          </Link>
        </div>
      </Conteiner>
    </div>
  );
};
