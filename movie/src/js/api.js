import { generateApiUrl } from "./utils";
import { renderMovie } from "./templetes";

export const getMovies = (path, root) => {
  fetch(generateApiUrl(path))
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const movies = data.results.map((movie) => renderMovie(movie)).join("");

      document.querySelector(root).innerHTML = movies;
    })
    .catch((err) => console.error(err));
};
