function displayTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonElementDate = londonElement.querySelector(".date");
    let londonElementTime = londonElement.querySelector(".time");

    let londonLocal = moment().tz("Europe/London");
    londonElementDate.innerHTML = londonLocal.format("dddd Do MMMM YYYY");
    londonElementTime.innerHTML = londonLocal.format("HH:mm:ss");
  }
  // NY

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkElementDate = newYorkElement.querySelector(".date");
    let newYorkElementTime = newYorkElement.querySelector(".time");
    let newYorkLocal = moment().tz("America/New_York");

    newYorkElementDate.innerHTML = newYorkLocal.format("dddd Do MMMM YYYY");
    newYorkElementTime.innerHTML = newYorkLocal.format("HH:mm:ss");
  }
  // Zurich

  let zurichElement = document.querySelector("#zurich");
  if (zurichElement) {
    let zurichElementDate = zurichElement.querySelector(".date");
    let zurichElementTime = zurichElement.querySelector(".time");
    let zurichLocal = moment().tz("Europe/Zurich");

    zurichElementDate.innerHTML = zurichLocal.format("dddd Do MMMM YYYY");
    zurichElementTime.innerHTML = zurichLocal.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#allCities");
  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="/" class="return">Return to homepage</a>`;
}

displayTime();
setInterval(displayTime, 1000);

let citiesSelectorElement = document.querySelector("#city-selector");
citiesSelectorElement.addEventListener("change", updateCity);
