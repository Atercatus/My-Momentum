const form = document.querySelector(".js-question");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
//const toDoForm = document.querySelector(".js-toDoForm");
//const toDoList = document.querySelector(".js-toDoList");
const period = greeting.querySelector(".period");
const name = greeting.querySelector(".name");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";


function saveName(text){
    // key, value
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(evnet){
    // 기존 동작 없애기 (인풋에 엔터를 치면 submit 기본 동작 수행(새로고침)을 없앤다)
    event.preventDefault();
    const curValue = input.value;
    paintGreeting(curValue);
    saveName(curValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    toDoForm.classList.add(SHOWING_ON);
    toDoList.classList.add(SHOWING_ON);

    period.innerText = ``

    greeting.innerText = `Hello ${text}`;
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