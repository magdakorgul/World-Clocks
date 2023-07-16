function updateLosAngelesTime(){
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement){
let losAngelesDateElement = losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(updateLosAngelesTime, 1000);

function updateBerlinTime(){

  let berlinElement = document.querySelector("#berlin");
if (berlinElement){
let berlinDateElement = berlinElement.querySelector(".date")
let berlinTimeElement = berlinElement.querySelector(".time");
let berlinTime = moment().tz("Europe/Berlin");
berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(updateBerlinTime, 1000);

function updateCity(event){
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");

citiesElement.innerHTML = `
<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(" A")}</small></div>
</div>

`
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
