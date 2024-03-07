temperaturetext = document.querySelector("#temperature");
apiurl =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m&timezone=Asia%2FTokyo";

const currentDate = new Date();
const localTime = currentDate.toLocaleTimeString().slice(0, 2);
console.log("Local time:", localTime);

fetch(apiurl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    temperature = data.hourly.temperature_2m.slice(0, 24);
    weather = console.log(temperature);
    temperaturetext.innerText = temperature[localTime] + "°C";
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
