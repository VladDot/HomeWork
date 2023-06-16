import { generateSearchUrl, generateApiUrl } from "./utils";
import { renderMovies, renderMovieDetalies, renderError } from "./templetes";

export const getMovies = (path) => {
  fetch(generateApiUrl(path))
    .then((res) => res.json())
    .then((data) => {
      const root = document.querySelector("#root");
      if (data.success === false) {
        root.innerHTML = renderError(data);
      } else {
        root.insertAdjacentHTML("beforeend", renderMovies(data.results, path));
      }
    })
    .catch((err) => console.error(err));
};

export const getSearchMovie = (search) => {
  const root = document.querySelector("#root");
  fetch(generateSearchUrl(search))
    .then((res) => res.json())
    .then((data) => {
      if (data.success === false) {
        root.innerHTML = renderError(data);
      } else {
        root.innerHTML = "";
        data.results.map((movie) => {
          root.insertAdjacentHTML("beforeend", renderMovieDetalies(movie));
        });
      }
    });
};

export const getMovieDetails = (path) => {
  fetch(generateApiUrl(path))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const root = document.querySelector("#root");
      if (data.success === false) {
        console.log("success", data.success);
        root.innerHTML = renderError(data);
      } else {
        root.innerHTML = renderMovieDetalies(data);
      }
    })
    .catch((err) => console.error(err));
};
