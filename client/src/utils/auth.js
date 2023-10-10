import decode from "jwt-decode";

export function getToken() {
  return localStorage.getItem("id_token");
}

export function getProfile() {
  return decode(getToken());
}

export function isTokenExpired(token) {
  // Decode the token to get its expiration time that was set by the server
  const decoded = decode(token);
  // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
  if (decoded.exp < Date.now() / 1000) {
    localStorage.removeItem("id_token");
    return true;
  }
  // If token hasn't passed its expiration time, return `false`
  return false;
}

export function loggedIn() {
  const token = getToken();
  // If there is a token and it's not expired, return `true`
  return token && !isTokenExpired(token) ? true : false;
}

export function login(idToken) {
  localStorage.setItem("id_token", idToken);
  window.location.assign("/profile");
}

export function logout() {
  localStorage.removeItem("id_token");
  window.location.reload();
}