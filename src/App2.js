import React, { useState } from "react";
import Navbar from "./components/Navbar";

import { useEffect } from "react";

import { useLocation , useNavigate } from "react-router-dom";

import axios from "axios";

const App2 = () => {
  const { state } = useLocation();

  const title = state.title;

  const [movieData, setMovieData] = useState({});

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`https://www.omdbapi.com/?t=${title}&apikey=91d34d7`)
      .then((e) => {
        console.log(e.data);
        setMovieData(e.data);
        if(e.data.Response==="False")
        {
           alert("Movie Not Found");
           navigate("/");
           
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar title={"Details"} />
      {loading === true ? (
        <div style={{
          color : "white",
          fontSize : "30px",
          marginLeft : "700px",
          marginTop : "100px",
        }} >
          Loading...
        </div>
        
      ) : (
        <>
          <div id="imgdiv">
            <img
              id="img"
              src={movieData.Poster}
              alt="image not available, sorry for inconvenience, but please hire me"
            />
          </div>
          <div id="info">
            <br />
            Title: {title}
            <br />
            Release Date: {movieData.Released}
            <br />
            Runtime: {movieData.Runtime}
            <br />
            Genre: {movieData.Genre}
            <br />
            Cast:{movieData.Actors}
            <br />
            Director: {movieData.Director}
            <br />
            IMDB rating: {movieData.imdbRating}
          </div>
        </>
      )}
    </>
  );
};

export default App2;
// the link starts here
