const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified");
const windchill = document.querySelector("#windchill");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

function windChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 3){
    var windChill = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + 0.4275 * temperature * (windSpeed ** 0.16);
    return `${Math.round(windChill)} °F`;
    } else {
        return "N/A";
    }
}

windchill.innerHTML = windChill(27,5);
