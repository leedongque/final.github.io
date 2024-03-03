const API_KEY = "0588becc6e4e6704d98406fd8504775c";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
function onGeoOk(position) {//이 함수는 position이라는 parameter을 객체로 준다
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    //console.log(url);
    //as long as you can generate the url, you can get the weather of current weather
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });


}


function onGeoError() {
    alert("can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);//requires two arguments