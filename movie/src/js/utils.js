import { API_URL, API_KEY, IMG_URL } from "./constants";

export const generateApiUrl = (path) => `${API_URL}${path}?api_key=${API_KEY}`;

export const generateImageUrl = (path) => `${IMG_URL}${path}`;
