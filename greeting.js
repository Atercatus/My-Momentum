const form = document.querySelector(".js-question");
const input = form.querySelector(".answer");
const greeting = document.querySelector(".js-greeting");
const format = document.querySelector(".format");
const name = document.querySelector(".name");
const clock = document.querySelector(".time");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";
const UNSHOWING_ON = "unshowing";


function saveName(text){
    // key, value
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(evnet){
    // 기존 동작 없애기 (인풋에 엔터를 치면 submit 기본 동작 수행(새로고침)을 없앤다)
    event.preventDefault();
    const curValue = input.value;
    saveName(curValue);
    paintGreeting(curValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function fadeAction(){
    const level = 1;
    const outTimer = setInterval(function(){level = fadeOutAction(level, outTimer);}, 50);
}

function fadeIn(){

}

function fadeOut(level, outTimer){
    level -= 0.1;
    body.style.opacity = level;

    if(level <= 0){
        clearInterval(outTimer);
    }

    return level;
}

function paintGreeting(text){
    clock.classList.add(SHOWING_ON);
    form.classList.remove(SHOWING_ON);
    form.classList.add(UNSHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    focusForm.classList.add(SHOWING_ON);
    focusList.classList.add(SHOWING_ON);

    format.innerText = clockContainer.dataset.format === "AM" ? "morning" : "afternoon";
    name.innerText = localStorage.getItem(USER_LS);
}

function loadName(){
    const crntUser = localStorage.getItem(USER_LS);
    if(crntUser === null){
        askForName();
    } else{
        paintGreeting(crntUser);
    }
}

function init(){
    loadName();
}

init();