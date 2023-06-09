import { generateApiUrl } from "./utils";
import { renderMovies, renderMovieDetalies, renderError } from "./templetes";

export const getMovies = (path) => {
  fetch(generateApiUrl(path))
    .then((res) => res.json())
    .then((data) => {
      const root = document.querySelector("#root");
      if (data.success === false) {
        root.innerHTML = renderError(data);
      } else {
        root.innerHTML = renderMovies(data.results, path);
      }
    })
    .catch((err) => console.error(err));
};

export const getMovieDetails = (path) => {
  fetch(generateApiUrl(path))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const root = document.querySelector("#root");
      if (data.success === false) {
        root.innerHTML = renderError(data);
      } else {
        root.innerHTML = renderMovieDetalies(data);
      }
    })
    .catch((err) => console.error(err));
};
