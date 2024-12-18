const tasksList = document.getElementById('tasks__list');
const addButton = document.getElementById('tasks__add');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task__input');
    let text = taskInput.value.trim();
 
    if (text.length > 0) {
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">
                ${text}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
    } 

    taskInput.value = '';
});

tasksList.addEventListener('click', (e) => {
    const deleteElement = e.target.closest('.task');
    deleteElement.remove();
});