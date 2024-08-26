document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // Simulate a login attempt (replace this with real authentication logic)
    if (username === "testuser" && password === "testpass") {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid username or password.');
    }
});