const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
<input type="checkbox">
<span>${taskText}</span>
<button class="delete">🗑️</button>
`;

    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        const taskSpan = listItem.querySelector('span');
        taskSpan.classList.toggle('complete', checkbox.checked);
    });

    const deleteButton = listItem.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
}