const clockContainer = document.querySelector(".js-clock");
const clockTitle =  clockContainer.querySelector("h1");

let lastMinutes = null;

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    if(lastMinutes === minutes){
        return ;
    }

    lastMinutes = minutes;
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockContainer.dataset.format = `${hours}` < 12 ? "AM" : "PM";
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();