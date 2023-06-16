import { generateImageUrl, generateTitle, generateImagePostUrl } from "./utils";
import { movieRate, rate } from "./rate";
import { renderPopularButton } from "./popular";

export const renderMovie = ({ id, poster_path, title, vote_average }) =>
  `<div class="card">
    <a href="#movieId=${id}">
      <img
        src="${generateImageUrl(poster_path)} "
        alt="${title}"
        loading="lazy"
      ></img>
    </a>
    ${rate(vote_average)}
    <h3 class="title p-3">${title}</h3>
  </div>`;

export const renderMovies = (movies, path) =>
  `
    <section  class="my-5 container">
    <div class="d-flex h-31 px-4">
    <h2 class="m-0 me-4">${generateTitle(path)}</h2>
${renderPopularButton("Today", "The Week")}
</div>
    <div class="banners bg-img " > ${movies
      .map((movie) => renderMovie(movie))
      .join("")}
      </div>
      </div>
    </section>
`;

export const renderMovieDetalie = ({
  id,
  title,
  vote_average,
  poster_path,
  overview,
}) =>
  `
  <div class="container">
    <div class="row">
      <div class="col">
      <div  class="poster-wraper ">  
        <div class="poster d-flex ">
          
  <a href="#movieId=${id}">
    <img
      src="${generateImagePostUrl(poster_path)} "
      alt="${title}"
      loading="lazy"
    ></img>
  </a>
  
  <div class='info ps-5'>
  <h1 >${title}</h1>
  <ul class=" w-100 d-flex align-items-center gap-3">
  <li class="movie-rate">${movieRate(vote_average)}</li>
  <li class="score">User Score</li>
 <li class="border rounded-circle p-1">img</li>
 <li class="border rounded-circle p-1">img</li>
 <li class="border rounded-circle p-1">img</li>
 <li class="border rounded-circle p-1">img</li>
 <li class="border rounded-circle p-1">img</li>
 </ul>
 <div>
 <h3 class="py-2">Overview</h3>
 <p>${overview}</p>
 </div>
  </div>

</div>
  </div>
  </div>
  </div>
  </div>
`;

export const renderMovieDetalies = (movie) => `
    <section  class="my-5 bg-01B4E4 p-5">
    ${renderMovieDetalie(movie)}
    </section>
    `;

export const renderError = ({ status_code, status_message }) => `
    <section  class="my-5">
    <h2> Status Code: ${status_code}</h2>
    <p> Status Code: ${status_message}</p>
    </section>
    `;
