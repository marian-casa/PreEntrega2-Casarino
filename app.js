// Variables que llaman elementos del html con Id
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Agregar nuevas tareas
function addTask() {
    if (inputBox.value === '') {
        alert('¡Tienes que escribir algo!')
    } 
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
// funcion que permite marcar, desmarcar y eliminar tareas
listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    } 
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Con estas funciones guardamos los datos ingresados
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

// Añadir una tarea al presionar Enter
inputBox.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addTask();
    }
});