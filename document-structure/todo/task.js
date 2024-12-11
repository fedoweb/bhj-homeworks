const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');

let text = '';

function createToDo(text) {
    const container = document.createElement('div');
    const div = document.createElement('div');
    const link = document.createElement('a');

    container.classList.add('task');
    div.classList.add('task__title');
    div.textContent = text;
    link.href = '#';
    link.classList.add('task__remove');
    link.innerHTML = '&times;';
    
    tasksList.appendChild(container);
    container.appendChild(div);
    container.appendChild(link);
}

function validate() {
    if (taskInput.value.length === 0) {
        return false;
    } else {
        return true;
    }
}

function deleteToDo() {
    const deleteButtons = document.querySelectorAll('.task__remove');

    for (const button of deleteButtons) {
        button.addEventListener('click', () => {
            const deleteElement = button.closest('.task');
            deleteElement.remove();
        });
    }
}

addButton.addEventListener('click', () => {
    text = taskInput.value;
    if (validate()) {
        createToDo(text);
        taskInput.value = '';
        deleteToDo();
    } 
});

taskInput.addEventListener('keydown', (e) => {
    text = taskInput.value;
  
    if (e.key === 'Enter') {
        addButton.click();
    } 
});








