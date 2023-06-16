import {
  API_URL,
  API_KEY,
  IMG_URL,
  IMG_POSTER_URL,
  SEARCH_URL,
} from "./constants";

export const generateApiUrl = (path) => `${API_URL}${path}?api_key=${API_KEY}`;

export const generateSearchUrl = (path) =>
  `${SEARCH_URL}${path}&api_key=${API_KEY}`;

export const generateImageUrl = (path) => `${IMG_URL}${path}`;
export const generateImagePostUrl = (path) => `${IMG_POSTER_URL}${path}`;

export const generateTitle = (str) =>
  str[0].toUpperCase() + str.slice(1).replaceAll("_", " ");

export const search = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  location.hash = `search=${e.target[0].value}`;
};
