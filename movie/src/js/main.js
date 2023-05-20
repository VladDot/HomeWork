export const { API_KEY } = process.env;
console.log("hellffo");

const options = { method: "GET", headers: { accept: "application/json" } };

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=a23b245444dfc6a40ca216bd5ab2fab6",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
