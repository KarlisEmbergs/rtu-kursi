let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    renderTasks();
  }

  taskInput.value = '';
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex align-items-center';

    listItem.innerHTML = `
    <input type="checkbox" id="${index}">
    <label for="${index}">${task}</label>
    
    <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-outline-danger btn-sm mr-2" onclick="deleteTask(${index})" id="deleteButton">Delete</button>
    
    <button type="button" class="btn btn-warning" onclick="markAsImportant(${task})">Mark as important</button>


    </div>
    `;

    taskList.appendChild(listItem);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function markAsImportant(index) {
  const clickedElement = document.getElementById(index).parentNode
  clickedElement.i
}
