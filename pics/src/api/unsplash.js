import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d37fdeccabe44085e1017e7600a60c28519c06d87503f8cb67bb29e6a52a28f3"
  }
});
