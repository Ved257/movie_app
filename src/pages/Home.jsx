import React from "react";
import "./Home.css";
import FeatherIcons from "feather-icons-react";
import Row from "../components/Row/Row";
import requests from "../axios/requests";

const Home =()=> {

  return (
    <div className="Home">
      <div className="navbar">
        <div className="navbar-brand">
          <h1>Movie App</h1>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/">Movies</a>
          <a href="/">TV Shows</a>
          <a href="/">New and Popular</a>
        </div>
        <div className="search-bar">
          <FeatherIcons icon="search" size="24" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Row title="Trending now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
