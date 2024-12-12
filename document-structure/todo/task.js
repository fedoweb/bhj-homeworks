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

    link.addEventListener('click', (e) => {
        e.preventDefault();
        const deleteElement = container;
        deleteElement.remove();
    });
    
    tasksList.appendChild(container);
    container.appendChild(div);
    container.appendChild(link);
};

function validate() {
    if (taskInput.value.length === 0) {
        return false;
    } else {
        return true;
    }
};

addButton.addEventListener('click', () => {
    text = taskInput.value;
    if (validate()) {
        createToDo(text);
        taskInput.value = '';
    } 
});

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    } 
});








