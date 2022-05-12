import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import axios from "../../axios/axios";
// import Details from "../Details/Details";
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import Details from "../Details/Details";
// import PlayArrow from "@material-ui/icons/PlayArrow";
import FeatherIcons from "feather-icons-react";
import Close from "@material-ui/icons/Close";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  

  // const MovieTrailer = async (movie) => {
  //   if (movie) {
  //     const trailerUrl = await movieTrailer(movie.title);
  //     const trailerUrlParams = new URLSearchParams(
  //       trailerUrl.split("?")[1]
  //     );
  //     const trailerUrlId = trailerUrlParams.get("v");
  //     setShow(true);
  //     setImage(movie.backdrop_path);
  //     setMovieTitle(movie.title);
  //     setDescription(movie.overview);
  //     setTrailerUrl(trailerUrlId);
  //   }
  // };


  return (
    <div>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          //On click, a modal will appear with the movie's details
          <img
            key={movie.id}
            // onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={async () => {
              await setShow(true);
              await setImage(movie.backdrop_path);
              await setDescription(movie.overview);
              await setMovieTitle(movie.title|| movie.name|| movie.original_name);
              console.log(movieTitle);
            }}
          />
        ))}
      </div>
      <div
        className="desc"
        style={{
          display: show ? "block" : "none",
        }}
      >
        <div className="desc__box">
          <div className="desc__close" onClick={handleClose}>
            <Close />
          </div>
          <div className="desc__content">
            <div className="desc__heading">
              <h1>{movieTitle}</h1>
              {/* <h5>
                <span className="desc__rating">7.5/10</span>
              </h5> */}
              <p className="desc__description">{description}</p>
              <div className="desc__buttons">
                <span className="button_text">
                  {/* <PlayArrow
                  style={{
                    fontSize: "3rem",
                  }} >
                    Play
                  </PlayArrow> */}
                  <button className="play_button">
                    <FeatherIcons icon="play" size="24" />{' '} Play
                    </button>
                </span>
              </div>
            </div>
          </div>
          <div
            className="desc__img"
            style={{
              backgroundImage: `url(${base_url}${image})`,
            }}>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
