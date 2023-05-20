import { generateUrl } from "./utils";
const options = { method: "GET", headers: { accept: "application/json" } };

fetch(generateUrl("/movie/popular"), options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const movies = data.results
      .map(
        ({ poster_path, original_title }) =>
          `<div class ="movies">
          <img src="https://image.tmdb.org/t/p/w200${poster_path}" 
          alt="${original_title}"></img>
                <div class= "title">${original_title}</div>
        </div>`
      )
      .join("");

    document.querySelector(".popular").innerHTML = movies;
  })
  .catch((err) => console.error(err));
