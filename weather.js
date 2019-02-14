const weather = document.querySelector(".js-weather");

const API_KEY = "74a7cff79977eb19a53b06972544a3bc";
const COORDS = "coords";

function getWeather(lat, lng){// 위도 경도
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).
    then((res)=>{
        return res.json();
    })
    .then((json) => {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
     console.log("Can't access geo location");
}

function askForCoords(){
    //The navigator object contains information about the browser.
    // 1st arg: 좌표를 불러오는 데 성공 했을 시에 실행될 함수
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError); 

}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();