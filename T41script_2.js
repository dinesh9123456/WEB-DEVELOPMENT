let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskList = document.getElementById('taskList');

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) li.classList.add('completed');
        li.onclick = () => toggleTask(i);
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.className = 'remove-btn';
        btn.onclick = (e) => { e.stopPropagation(); removeTask(i); };
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ text, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
}

function toggleTask(i) {
    tasks[i].completed = !tasks[i].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function removeTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();
