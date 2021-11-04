import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.moviesEndpoint);
}

export function getMovie(id) {
  return http.get(config.moviesEndpoint + "/" + id);
}

export function saveMovie(movie) {
  return http.put(config.moviesEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(config.moviesEndpoint + "/" + id);
}
