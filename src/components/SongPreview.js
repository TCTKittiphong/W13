import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SongPreview = (props) => {
  const location = useLocation();
  const song = location.state;
  const navigate = useNavigate();

  const Layout = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 2%;
  `;
  const ArtistName = styled.h2`
    text-align: center;
    margin: 10px;
  `;

  const LoCenter = styled.div`
    text-align: center;
    margin: 10px;
  `;

  return (
    <Layout className="w3-container w3-center w3-animate-bottom">
      <ArtistName>{song.artistName}</ArtistName>
      <LoCenter>
        <img src={song.artworkUrl100} alt="artwork" />
        <LoCenter>Track Name : {song.trackName}</LoCenter>
      </LoCenter>
      <LoCenter>
        {song.kind === "song" ? (
          <audio controls="controls" autoPlay="autoPlay">
            <source src={song.previewUrl} type="audio/mp4" />
          </audio>
        ) : (
          <video controls="controls" width={600} autoPlay="autoPlay">
            <source src={song.previewUrl} type="video/mp4" />
            Your Browser does not support video tag.
          </video>
        )}
      </LoCenter>
      <LoCenter>
        <button className="btn btn-sm bg-primary" onClick={() => navigate(-1)}>
          Back to song list
        </button>
      </LoCenter>
    </Layout>
  );
};
