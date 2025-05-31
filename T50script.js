// Dynamic Project List (could be fetched from API in real app)
const projects = [
    {
        title: "E-Commerce Demo",
        description: "A fast, responsive e-commerce site with product filtering and cart.",
        image: "https://via.placeholder.com/300x150?text=E-Commerce",
        link: "C://Users/dines/web development/task-5/e_commerce.html"
    },
    {
        title: "Blog Platform",
        description: "A modern blog with markdown support and live comments.",
        image: "https://via.placeholder.com/300x150?text=Blog",
        link: "C://Users/dines/web development/task-5/blog.html"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my projects and skills.",
        image: "https://via.placeholder.com/300x150?text=Portfolio",
        link: "C://Users/dines/web development/task-5/portofolio.html"
    }
];

// Render projects dynamically
const projectList = document.getElementById('project-list');
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        <a href="${proj.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(card);
});

// Contact Form Validation & Feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const msgDiv = document.getElementById('formMsg');

    if (!name || !email || !message) {
        msgDiv.textContent = "Please fill in all fields.";
        msgDiv.style.color = "red";
        return;
    }
    if (!validateEmail(email)) {
        msgDiv.textContent = "Please enter a valid email.";
        msgDiv.style.color = "red";
        return;
    }
    msgDiv.textContent = "Message sent! Thank you.";
    msgDiv.style.color = "green";
    this.reset();
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
