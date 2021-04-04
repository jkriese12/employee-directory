import axios from "axios";
// API link to call from
const randomApi = "https://randomuser.me/api/?results=100&nat=us";
// Exporting function to get data from API
export default {
  search: function () {
    return axios.get(randomApi);
  },
};
