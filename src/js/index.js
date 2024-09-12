const BASE_URL = 'https://api.themoviedb.org/3/';
const ENDPOINT = 'trending/movie/day';
const API_KEY = 'e7b77a04616bbe4184f610c6f41bfdf9';
function getTrending() {
  fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`);
}
