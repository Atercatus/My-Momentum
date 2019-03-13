const focusForm = document.querySelector(".js-focusForm");
const focusInput = focusForm.querySelector("input");
const focusList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    focusList.removeChild(li);

    for(let i = 0; i < toDos.length; i++){
        if(toDos[i].id === parseInt(li.id)){
            toDos.splice(i,1);
            break;
        }
    }

    // const cleanToDos = toDos.filter((toDo) => { // array 반환함
    //     return toDo.id !== parseInt(li.id);
    // });
    // toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText =  "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    focusList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const curValue = toDoInput.value;
    paintToDo(curValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDOs = localStorage.getItem(TODOS_LS);
    if(loadedToDOs !== null){
        const parsedToDos = JSON.parse(loadedToDOs);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    focusForm.addEventListener("submit", handleSubmit);
}

init();