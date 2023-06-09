import { getMovies, getMovieDetails } from "./api";
checkUrl();

/* getMovies("upcoming", "#upcoming"); */

window.addEventListener("hashchange", (e) => {
  checkUrl();
});

function checkUrl() {
  const [hash, movieId] = location.hash.split("=");

  if (hash === "#movieId") {
    getMovieDetails(movieId);
  } else {
    getMovies("top_rated");
  }
}
