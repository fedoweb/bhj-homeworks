
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');

let text = '';

function createToDo(text) {

    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
            ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    const task = tasksList.querySelector('.task');
    const taskRemove = task.querySelector('.task__remove');

    taskRemove.addEventListener('click', () => {
        task.remove();
    });
};

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    text = taskInput.value.trim();

if (text.length > 0) {
    createToDo(text);
} 

taskInput.value = '';
});