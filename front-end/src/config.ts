//This file make sure that we don't need to hardcode the URL to fetch the data API's.
// config.js
const BASE_URL = window.location.hostname.includes("localhost")
  ? "http://localhost:8000"
  : "https://your-production-domain.com";

export default BASE_URL;
