import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(config.moviesEndpoint);
}

export function getMovie(id) {
  return http.get(config.moviesEndpoint + "/" + id);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(config.moviesEndpoint + "/" + movie._id, body);
  }
  return http.post(config.moviesEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(config.moviesEndpoint + "/" + id);
}
