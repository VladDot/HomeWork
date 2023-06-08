import { generateImageUrl } from "./utils";
import { rate } from "./rate";

export const renderMovie = ({ poster_path, original_title, vote_average }) =>
  `<div class="card">
    <a href="#">
      <img
        src="${generateImageUrl(poster_path)} "
        alt="${original_title}"
        loading="lazy"
      ></img>
    </a>
    ${rate(vote_average)}
    <div class="title p-3">'${original_title}'</div>
  </div>`;
