const API_KEY= "4cd4b1670694341f8352aaf4649a50d4";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
    fetchSearchResult: `/search/multi?api_key=${API_KEY}&language=en-US&query=`,
    fetchSearchResultMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
    fetchSearchResultSeries: `/search/tv?api_key=${API_KEY}&language=en-US&query=`,
    fetchMovie: `/movie/`,
    fetchSeries: `/tv/`,
    fetchSeason: `/tv/`,


}

export default requests;