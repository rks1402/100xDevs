let current_index = 3;

function addTodo() {
    const input_element = document.getElementById("input-todo");
    const todo_text = input_element.value.trim();
    if(todo_text === ''){
        alert('Please enter a todo item.');
        return;
    }

    const new_todo_element = document.createElement('div');
    new_todo_element.setAttribute('id', 'todo-' + current_index);

    const new_todo_text = document.createElement('h4');
    new_todo_text.innerHTML = todo_text;

    const new_delete_button = document.createElement('button');
    new_delete_button.textContent = 'Delete';
    new_delete_button.setAttribute('onclick', 'deleteTodo(' + current_index +')');

    new_todo_element.appendChild(new_todo_text);
    new_todo_element.appendChild(new_delete_button);

    const todo_parent = document.getElementById('todos');
    todo_parent.appendChild(new_todo_element);

    current_index++;
    
}

function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
}