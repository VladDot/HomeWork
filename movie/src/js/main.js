import { getMovies, getMovieDetails, getSearchMovie } from "./api";
import { search } from "./utils";

checkUrl();

window.addEventListener("hashchange", (e) => {
  checkUrl();
});

const searchForm = document.querySelector("#search");

searchForm.addEventListener("submit", search);

function checkUrl() {
  const [hash, movieId] = location.hash.split("=");
  console.log(hash);
  const root = document.querySelector("#root");
  if (hash === "#movieId") {
    getMovieDetails(movieId);
  } else if (hash === "") {
    root.innerHTML = "";
    getMovies("popular");
    getMovies("top_rated");
    getMovies("upcoming");
  } else if (hash === "#search") {
    getSearchMovie(movieId);
  } else {
    root.innerHTML = "ERROR";
  }
}
