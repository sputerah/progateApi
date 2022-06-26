const API_KEY = "api_key=03893e51a5501b4e7aa0ff0b4ea6f048";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const main = document.getElementById("main");
getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";
  data.forEach((movies) => {
    const { title, poster_path, vote_average, overview, release_date } = movies;
    const movieList = document.createElement("div");
    movieList.classList.add("movie");
    movieList.innerHTML = `
         <div class="movie card">
            <img src="${
              IMG_URL + poster_path
            }" class="card-img-top" alt="${title}" />
            <div class="card-body">
              <div class="movie-info">
                <h1 class="card-title">${title}</h1>
                <p class="card-text" id="overview">
                ${overview}
                </p>
                <span class="${getColor(vote_average)}">${vote_average}</span>
              </div>
            </div>
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
