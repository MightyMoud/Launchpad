const fetch = require("node-fetch");
module.exports = async function getImage(city) {
  const URL = `https://api.pexels.com/v1/search?per_page=1&query=${city}`;
  const res = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001a2b96e9bef8548e88a98241cdb273b4a"
    }
  });
  const resJSON = await res.json();
  return resJSON.photos[0].src.large;
};
