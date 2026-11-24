// script.js
document.addEventListener('DOMContentLoaded', () => {
 const loginForm = document.getElementById('loginForm');

 loginForm.addEventListener('submit', (e) => {
 e.preventDefault();

 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;

 // Validate inputs (basic check)
 if (!username || !password) {
 alert('Please enter both username and password.');
 return;
 }

 // Simulate API call
 const formData = new FormData();
 formData.append('username', username);
 formData.append('password', password);

 // Redirect to a success page (or handle data)
 // For now, we'll simulate a successful login
 console.log('Login Attempt:', { username, password });
 
 // In a real scenario, you would send this data to your backend or log file
 // Example: window.location.href = 'success.html';
 });
});