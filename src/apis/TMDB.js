import axios from "axios";

export const KEY = "80f9558ee00fbe6653d7ee77b88e6eeb";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
