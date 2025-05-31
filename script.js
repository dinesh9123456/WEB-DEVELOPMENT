// --- Interactive Quiz ---
const quizData = [
    {
        question: "Which of these is a JavaScript data type?",
        options: ["String", "Car", "Table", "Window"],
        answer: 0
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: ["// comment", "<!-- comment -->", "# comment", "' comment"],
        answer: 0
    },
    {
        question: "Which method is used to select an element by ID?",
        options: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "getElementByTagName()"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx, btn);
        optionsDiv.appendChild(btn);
    });
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('quizResult').textContent = '';
}

function selectOption(idx, btn) {
    // Remove previous selections
    Array.from(document.getElementById('options').children).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('nextBtn').style.display = 'inline-block';
    btn.dataset.selected = idx;
}

document.getElementById('nextBtn').onclick = function() {
    const selectedBtn = Array.from(document.getElementById('options').children).find(b => b.classList.contains('selected'));
    if (selectedBtn) {
        const selected = Number(selectedBtn.dataset.selected);
        if (selected === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById('quiz').innerHTML = `<div id="quizResult">Quiz Complete! Your score: ${score}/${quizData.length}</div>`;
        }
    }
};

// Initialize quiz
loadQuestion();

// --- Fetch Data from an API ---
function fetchJoke() {
    const jokeP = document.getElementById('joke');
    jokeP.textContent = "Loading...";
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            jokeP.textContent = `${data.setup} — ${data.punchline}`;
        })
        .catch(() => {
            jokeP.textContent = "Failed to fetch a joke.";
        });
}
