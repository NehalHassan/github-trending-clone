import axios from "axios";

export const fetchTrendingByRepos = () => {
  const result = axios.get(
    "https://gh-trending-api.herokuapp.com/repositories"
  );
  return result;
};

export const fetchTrendingByDev = () => {
  const result = axios.get("https://gh-trending-api.herokuapp.com/developers");
  return result;
};
