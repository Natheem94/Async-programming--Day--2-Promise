let req1 = fetch("https://restcountries.com/v3.1/all");
req1
  .then((a) => {
    return a.json();
  })
  .then((b) => {
    document.getElementById(
      "flag1-img"
    ).innerHTML = `<img src="${b[38].flags.png}" id="flag1" class="card-img-top"></img>`;
    document.getElementById("flag1-title").innerHTML = b[38].name.common;
    document.getElementById(
      "flag1-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[38].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[38].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[38].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[38].population}</li>`;

    document.getElementById(
      "flag2-img"
    ).innerHTML = `<img src="${b[97].flags.png}" id="flag2" class="card-img-top"></img>`;
    document.getElementById("flag2-title").innerHTML = b[77].name.common;
    document.getElementById(
      "flag2-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[97].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[97].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[97].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[97].population}</li>`;

    document.getElementById(
      "flag3-img"
    ).innerHTML = `<img src="${b[58].flags.png}" id="flag3" class="card-img-top"></img>`;
    document.getElementById("flag3-title").innerHTML = b[58].name.common;
    document.getElementById(
      "flag3-text"
    ).innerHTML = `<li class="list-group-item text-center bg-info fw-semibold">Capital: ${b[58].capital}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Region: ${b[58].region}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Country Code: ${b[58].cioc}</li>
    <li class="list-group-item text-center bg-info fw-semibold">Population: ${b[58].population}</li>`;
  });

function func(lat, lng, nam) {
  let name = document.getElementById(`flag${nam}-title`).textContent;
  let req2 = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a25e2b3090d94fba0e3bd0e2d3929498`
  );
  req2
    .then((a) => {
      return a.json();
    })
    .then((b) => {
      // switch (deg) {
      //   case deg >= 11.25 && deg <= 33.75:
      //     dir = "NNE";
      //     break;
      //   case deg > 33.75 && deg <= 56.25:
      //     dir = "NE";
      //     break;
      //   case deg > 56.25 && deg <= 78.75:
      //     dir = "ENE";
      //     break;
      //   case deg > 78.75 && deg <= 101.25:
      //     dir = "E";
      //     break;
      //   case deg > 101.25 && deg <= 123.75:
      //     dir = "ESE";
      //     break;
      //   case deg > 123.75 && deg <= 146.25:
      //     dir = "SE";
      //     break;
      //   case deg > 146.25 && deg <= 168.75:
      //     dir = "SSE";
      //     break;
      //   case deg > 168.75 && deg <= 191.25:
      //     dir = "S";
      //     break;
      //   case deg > 191.25 && deg <= 213.75:
      //     dir = "SSW";
      //     break;
      //   case deg > 213.75 && deg <= 236.25:
      //     dir = "SW";
      //     break;
      //   case deg > 236.25 && deg <= 258.75:
      //     dir = "WSW";
      //     break;
      //   case deg > 258.75 && deg <= 281.25:
      //     dir = "W";
      //     break;
      //   case deg > 281.25 && deg <= 303.75:
      //     dir = "WNW";
      //     break;
      //   case deg > 303.75 && deg <= 326.25:
      //     dir = "NW";
      //     break;
      //   case deg > 326.25 && deg <= 348.75:
      //     dir = "NNW";
      //     break;
      //   case deg > 348.75 || deg < 11.25:
      //     dir = "N";
      //     break;
      // }

      document.getElementById(
        "weather_info"
      ).innerHTML = `<ul class="list-group">
        <li class="list-group-item bg-dark text-white text-center text-uppercase">weather report of ${name}</li>
        <li class="list-group-item list-group-item-secondary text-center">Temperature: ${b.main.temp}°C</li>
        <li class="list-group-item list-group-item-secondary text-center">Temperature: ${b.wind.speed}m/s</li>
        <li class="list-group-item list-group-item-secondary text-center">Humidity: ${b.main.humidity}%</li>
      </ul>`;
    });
}
