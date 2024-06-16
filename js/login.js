document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (In a real application, validate against a database or API)
        if (username === 'aryam' && password === 'password') {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'book.html';
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
