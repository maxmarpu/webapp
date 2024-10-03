// Switch between login and signup forms
function switchToSignup() {
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('signupForm').classList.remove('d-none');
}

function switchToLogin() {
    document.getElementById('signupForm').classList.add('d-none');
    document.getElementById('loginForm').classList.remove('d-none');
}

// Sign up logic (store user info in localStorage)
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert('Sign up successful! You can now log in.');
        switchToLogin();
    } else {
        alert('Please fill in both fields.');
    }
}

// Login logic
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        window.location.href = 'chat.html'; // Redirect to chat page
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Chat functionality
function sendMessage() {
    const message = document.getElementById('messageInput').value;
    if (message.trim() !== '') {
        const chatBox = document.getElementById('chatBox');
        const messageElement = document.createElement('p');
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        document.getElementById('messageInput').value = ''; // Clear input
    }
}

// Logout functionality
function logout() {
    localStorage.removeItem('user'); // Remove user session from localStorage
    window.location.href = 'index.html'; // Redirect back to login page
}
