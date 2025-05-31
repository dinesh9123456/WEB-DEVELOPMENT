// Demo blog posts
const posts = [
    {
        title: "Welcome to My Blog",
        date: "May 20, 2025",
        image: "",
        summary: "This is a demo post showing how a simple blog platform can work using only HTML, CSS, and JavaScript.",
        content: "This is a demo post showing how a simple blog platform can work using only HTML, CSS, and JavaScript. You can expand this by connecting to a backend, using markdown, or adding a WYSIWYG editor."
    },
    {
        title: "Second Post: Responsive Design",
        date: "May 19, 2025",
        image: "",
        summary: "Learn how to make your blog look great on all devices using CSS flexbox and media queries.",
        content: "Learn how to make your blog look great on all devices using CSS flexbox and media queries. Responsive design is essential for modern web applications."
    }
];

// Render blog posts
function renderPosts() {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';
    posts.forEach((post, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${post.title}</h2>
            <h5>${post.date}</h5>
            <div class="fakeimg" style="height:200px;">${post.image || 'Image'}</div>
            <p>${post.summary}</p>
            <button onclick="readMore(${idx})">Read More</button>
            <div class="full-content" id="content-${idx}" style="display:none; margin-top:10px;">
                <p>${post.content}</p>
                <button onclick="hideContent(${idx})">Show Less</button>
            </div>
        `;
        blogList.appendChild(card);
    });
}

window.readMore = function(idx) {
    document.getElementById(`content-${idx}`).style.display = 'block';
}

window.hideContent = function(idx) {
    document.getElementById(`content-${idx}`).style.display = 'none';
}

renderPosts();
