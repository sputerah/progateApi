const API_KEY = "api_key=03893e51a5501b4e7aa0ff0b4ea6f048";
const BASE_URL = "https://api.themoviedb.org/3";
const DETAIL_MOVIE = BASE_URL + "/movie/338953?" + API_KEY;
getDetailMovies(DETAIL_MOVIE);
function getDetailMovies(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      const detail = resp.genres;
      const pelajaran = resp.tema;
      const getMovies = resp;
      let cards = "";
      getMovies.forEach((data) => (cards += showCards(data)));
      const detailMovies = document.querySelector(".movie_card-detail");
      detailMovies.innerHTML = cards;
    });
}
function detailMovies(data) {
  return `
  <div class="info_section-detail">
  <div class="movie_header-detail">
    <img
      class="img-detail"
      src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
    />
    <h1>${data.title}</h1>
    <p class="type">${data.genre(name)}</p>
  </div>
  <div class="movie_desc">
    <p class="text">overview description</p>
  </div>
</div>
<div class="blur_back bright_back"></div
    `;
}
