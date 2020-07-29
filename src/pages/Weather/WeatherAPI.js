
async function getWeather(geo) {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e2ddd4e6ad166908c6e3af4c7868daf6/${geo.lat},${geo.lng}`
  );
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
}

