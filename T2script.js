// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const msg = document.getElementById('formMsg');
    msg.style.color = 'red';

    if (!name) {
        msg.textContent = "Name is required.";
        return;
    }
    if (!validateEmail(email)) {
        msg.textContent = "Invalid email format.";
        return;
    }
    msg.style.color = 'green';
    msg.textContent = "Form submitted successfully!";
    this.reset();
});

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// To-Do List
function addTask() {
    const input = document.getElementById('newTask');
    const task = input.value.trim();
    if (!task) return;
    const ul = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = task;

    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.className = 'remove-btn';
    btn.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(btn);
    ul.appendChild(li);
    input.value = '';
}
