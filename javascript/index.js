function updateTime() {
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM ,Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SS [<small>]A [</small]"
  );
  let sydneyElement = document.querySelector("#Sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM ,Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss:SS [<small>]A [</small]"
  );
  let tokyoElement = document.querySelector("#Tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM ,Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "h:mm:ss:SS [<small>]A [</small]"
  );
  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM ,Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss:SS [<small>]A [</small]"
  );
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" >
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM, Do YYYY")}</div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  <a href="index.html">All cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);
let citiesSelect = document.querySelector("#city");
citiesSelectElement = addEventListener("change", updateCity);
