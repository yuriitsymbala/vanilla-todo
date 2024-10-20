/* Add ui logic to show/hide add-todo-container 
    - add-todo-create-btn clicked - show separator + form + btn wrapper + hide self
    - add-todo-save-btn   clicked - all hiden, only show add-todo-create-btn  
    - add-todo-cancel-btn clicked - same logic as save
*/

const createBtn = document.getElementById('add-todo-create-btn');
const saveBtn = document.getElementById('add-todo-save-btn');
const cancelBtn = document.getElementById('add-todo-cancel-btn');
const separator = document.getElementById('separator');
const addTodoForm = document.getElementById('add-todo-form');
const actionsBtnWrapper = document.getElementById('add-todo-actions-wrapper');

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