import { getMovies } from "./api";

const options = { method: "GET", headers: { accept: "application/json" } };

getMovies("popular", "#popular");
getMovies("top_rated", "#topRate");
getMovies("upcoming", "#upcoming");
