import React from 'react'
import { useState, useEffect } from 'react'
import requests from '../../axios/requests'
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await requests.fetchNetflixOriginals();
      setMovie(request);
      return request;
    }
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie?.backdrop_path || movie?.poster_path})`,
        backgroundPosition: "center center"
      }}>
        <div className="banner__content">
          <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h2 className="banner__description">{truncate(movie?.overview, 150)}</h2>
        </div>
      </header>
    </div>
  )
}

export default Banner