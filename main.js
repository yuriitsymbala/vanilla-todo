const createBtn = document.getElementById('add-todo-create-btn');
const saveBtn = document.getElementById('add-todo-save-btn');
const cancelBtn = document.getElementById('add-todo-cancel-btn');
const separator = document.getElementById('separator');
const addTodoForm = document.getElementById('add-todo-form');
const actionsBtnWrapper = document.getElementById('add-todo-actions-wrapper');
const titleInput = document.getElementById('add-title-input');
const subtitleInput = document.getElementById('add-description-input')
const todoListContainer = document.getElementById('todo-list-container');

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

function fetchTodos() {
    todoListContainer.innerHTML = '';
    for (const todo of todos) {
    const todoCell = document.createElement('div');
    todoCell.className = 'todo-item';
    todoListContainer.appendChild(todoCell);

    const todoHeader = document.createElement('div');
    todoHeader.className = 'todo-header';
    todoCell.appendChild(todoHeader);

    const todoCategory = document.createElement('span');
    todoCategory.className = 'todo-category';
    todoCategory.textContent = todo.category;
    todoHeader.appendChild(todoCategory);

    const todoActions = document.createElement('div');
    todoActions.className = 'todo-actions';
    todoHeader.appendChild(todoActions);

    const todoEditBtn = document.createElement('button');
    todoEditBtn.className = 'todo-edit-btn';
    todoEditBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1384_63)">
            <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#323232"/>
        </g>
        <defs>
            <clipPath id="clip0_1384_63">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
`;
    todoActions.appendChild(todoEditBtn);

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.className = 'todo-delete-btn';
    todoDeleteBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#323232"/>
    </svg>
`;
    todoActions.appendChild(todoDeleteBtn);

    const todoTitle = document.createElement('input');
    todoTitle.className = 'todo-title';
    todoTitle.type = 'text';
    todoTitle.value = todo.title;
    todoCell.appendChild(todoTitle);

    const todoSubtitle = document.createElement('input');
    todoSubtitle.className = 'todo-subtitle';
    todoSubtitle.type = 'text';
    todoSubtitle.value = todo.description;
    todoCell.appendChild(todoSubtitle);

    const todoDoneBtn = document.createElement('button');
    todoDoneBtn.className = 'todo-done-btn';
    todoDoneBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.59 5.58L8 12.17L4.41 8.59L3 10L8 15L16 7L14.59 5.58ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="white"/>
    </svg>
    <span class="todo-done-title">Завершити</span>
`;
    todoCell.appendChild(todoDoneBtn);
}
}

fetchTodos();

/* show/hide/save new todo */
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

    const newTodo = {
        id: Date.now(),
        title: titleInput.value,
        description: subtitleInput.value,
        category: 'ДОМАШНІ СТРАВИ',
        isDone: false
    };
    todos.push(newTodo);
    fetchTodos();
    titleInput.value = '';
    subtitleInput.value = '';
};

cancelBtn.onclick = () => {
    separator.style.display = 'none';
    addTodoForm.style.display = 'none';
    actionsBtnWrapper.style.display = 'none';
    createBtn.style.display = 'flex';

    titleInput.value = '';
    subtitleInput.value = ''
};

// Add event listener to buttons array and set the category type for new task
