import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header";
import { FormSearch } from "./components/FormSearch";
import { Home } from "./components/Home";
import { SongPreview } from "./components/SongPreview";
import { SequenceSpinner } from "react-spinners-kit";
import React from "react";


function App() {
  const [songs, setSong] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const searchSong = (params) => {
    setIsLoading(true);
    var url = 'https://itunes.apple.com/search';
    url += '?term=' + params.term;
    url += '&entity=' + params.entity;
    url += '&limit=' + params.limit;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCount(data.resultCount);
        setSong(data.results);
        setIsLoading(false);
      })

      .catch(err => {
        window.alert(err);
        setIsLoading(false);
      })
  }

  return (
    <div className="container mt-3">

      <Header />
      <FormSearch searchSong={searchSong}/>

      <h4>Result Count : {count}</h4>
      { isLoading && <SequenceSpinner />}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home songs={songs}/> } />
          <Route path='/preview' element={<SongPreview /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
