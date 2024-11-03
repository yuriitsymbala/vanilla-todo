/* show/hide add-todo-container */

const createBtn = document.getElementById('add-todo-create-btn');
const saveBtn = document.getElementById('add-todo-save-btn');
const cancelBtn = document.getElementById('add-todo-cancel-btn');
const separator = document.getElementById('separator');
const addTodoForm = document.getElementById('add-todo-form');
const actionsBtnWrapper = document.getElementById('add-todo-actions-wrapper');
const todoListContainer = document.getElementById('todo-list-container');

createBtn.onclick = () => {
    separator.style.display = 'flex';
    addTodoForm.style.display = 'flex';
    actionsBtnWrapper.style.display = 'flex';
    createBtn.style.display = 'none';
};

saveBtn.onclick = () => {
    separator.style.display = 'none';
    addTodoForm.style.display = 'none';
    actionsBtnWrapper.style.display = 'none';
    createBtn.style.display = 'flex';
};

cancelBtn.onclick = () => {
    separator.style.display = 'none';
    addTodoForm.style.display = 'none';
    actionsBtnWrapper.style.display = 'none';
    createBtn.style.display = 'flex';
};

/* fetch todos */

const todos = [
    {
        id: 0,
        title: 'Купити продукти',
        description: 'Скласти список необхідних продуктів та відвідати магазин.',
        category: 'ДОМАШНІ СТРАВИ',
        isDone: false
    },
    {
        id: 1,
        title: 'Пройти прогулянку на свіжому повітрі',
        description: 'Встановити таймер на 30 хвилин і прогулятися в парку.',
        category: 'ФІТНЕС',
        isDone: true
    }
];

for (const todo of todos) {
    /* Todo cell configuration */
    const todoCell = document.createElement('div');
    todoCell.className = 'todo-item';
    todoListContainer.appendChild(todoCell);
}