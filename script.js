
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTarefa() {
    if (inputBox.value === '') {
        alert('Por Favor insira uma tarefa!')
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        saveData()
    }
    else if (ev.target.tagName === 'SPAN') {
        ev.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()