const apiKey ="f0997021dcb5911521e2ab4b21382604";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`+"&units=metric");
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block" ;
        document.querySelector(".error").style.display = "none" ;
    }

    var data = await response.json();
     console.log(data);
     
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h" ;
    document.querySelector(".weather-icon").src="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png" ;

    
    document.querySelector(".weather").style.display = "block";

}
searchBox.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})