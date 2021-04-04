import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

const marvelUrl =
  "http://gateway.marvel.com/v1/public/characters?ts=1&limit=50&apikey=3c14f22cccc40f2a5fe8c84b010ca86c&hash=6fac2ceafd3cb12c55fe7b17df6ff4d6";
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(marvelUrl);
  },
};
