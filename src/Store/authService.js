import axios from "axios";

let BaseUrl = "https://api.punkapi.com/v2/beers?page=1&per_page=10";

export function getData() {
  console.log("2");

  return axios.get("https://api.punkapi.com/v2/beers?page=1&per_page=10");
}
