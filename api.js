// Mendeklarasikan URL
const API_KEY = "api_key=03893e51a5501b4e7aa0ff0b4ea6f048";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;
const GENRES_URL =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=03893e51a5501b4e7aa0ff0b4ea6f048&language=en-US";
const main = document.getElementById("main");

// URL
getMovies(API_URL);
getGenres(GENRES_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function getGenres(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.genres);
      showGenres(data);
    });
}
// function showGenres(data) {
//   main.innerHTML = "";
//   data.forEach((genres) => {
//     const { genres } = genres;
//   });
// }
// show movies
function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movies) => {
    const {
      title,
      poster_path,
      vote_average,
      overview,
      release_date,
      backdrop_path,
    } = movies;
    const movieList = document.createElement("div");
    movieList.classList.add("movie");
    movieList.innerHTML = `
    <div class="movie-card" id="bright">
    <div class="info-section">
      <div class="movie-header">
        <img
          class="movie-poster"
          src="${IMG_URL + backdrop_path}"
        />
        <h4>${title}</h4>
       
        <p class="type">Action, Crime, Fantasy</p>
      </div>
      <div class="movie-desc">
        <p class="text">
          ${overview}
        </p>
       <div>
       <button class="detail"><a href="#">View Detail</a></button>
       <span class="${getColor(vote_average)}">${vote_average}</span>
       </div>
        
      </div>
    </div>
    <div class="blur-back bright-back" style="background-image: url('${
      IMG_URL + poster_path
    }')
    "></div>
  </div>
    
    `;
    main.appendChild(movieList);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchMovie = search.value;

  if (searchMovie) {
    getMovies(searchURL + "&query=" + searchMovie);
  }
});
