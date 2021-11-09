import http from "./httpService";
import config from "../config.json";

export function login(email, password) {
  return http.post(config.authEndpoint, { email, password });
}
