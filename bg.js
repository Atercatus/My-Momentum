// const bg = document.querySelector(".bg");
const bg = document.querySelector(".background");

const NUMBER_IMGS = 7;

function paintImg(imgNum){
    const li = document.createElement("li");
    li.style = `background-image: url(./images/${imgNum + 1}.jpeg)`
    // const img = new Image();
    // img.src = `./images/${imgNum + 1}.jpeg`;
    // img.classList.add("bgImage");
    bg.appendChild(li);
}

function getRand(){ // floor는 바닥(내림) ceil은 천장(올림)
    const number = Math.floor(Math.random() * NUMBER_IMGS);
    return number;
}

function init(){
    const randNum = getRand();
    paintImg(randNum);
}

init();