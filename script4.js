
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form data
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required.';
        return;
    }

    // Replace with actual authentication logic
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        // Redirect or perform actions upon successful login
        window.location.href = 'dashboard.html'; // Example redirect to a dashboard
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});