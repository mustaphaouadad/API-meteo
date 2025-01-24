const apiKey ="f0997021dcb5911521e2ab4b21382604";
const apiUrl ="https://api.openweathermap.org/data/2.5/forecast?q=";

semain();
function semain() {
    
 let city =JSON.parse(localStorage.getItem("city"));

 console.log(city);
 

    fetch(apiUrl + city + `&appid=${apiKey}`+"&units=metric")
    .then(response=>response.json())
    .then(data => {
        console.log(data);
     
        //  jour 1
        document.getElementById("temp1").innerHTML = data.list[3].main.temp+ "°C";
        document.getElementById("weather-icon1").src="https://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+"@2x.png" ;

         //  jour 2
         document.getElementById("temp2").innerHTML = data.list[5].main.temp+ "°C";
         document.getElementById("weather-icon2").src="https://openweathermap.org/img/wn/"+data.list[5].weather[0].icon+"@2x.png" ;
        
          //  jour 3
          document.getElementById("temp3").innerHTML = data.list[10].main.temp+ "°C";
          document.getElementById("weather-icon3").src="https://openweathermap.org/img/wn/"+data.list[10].weather[0].icon+"@2x.png" ;
          
          //  jour 4
          document.getElementById("temp4").innerHTML = data.list[18].main.temp+ "°C";
          document.getElementById("weather-icon4").src="https://openweathermap.org/img/wn/"+data.list[18].weather[0].icon+"@2x.png" ;

             //  jour 5
             document.getElementById("temp5").innerHTML = data.list[28].main.temp+ "°C";
             document.getElementById("weather-icon5").src="https://openweathermap.org/img/wn/"+data.list[28].weather[0].icon+"@2x.png" ;
    })
    .catch();
} 

     


