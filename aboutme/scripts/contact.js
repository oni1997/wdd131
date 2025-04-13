// Array to store form submissions
const submissions = [];

// Load previous messages from localStorage
const loadPreviousMessages = () => {
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    submissions.push(...savedMessages);
    displayMessages();
};

// Display messages using template literals
const displayMessages = () => {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = submissions.map(submission => `
        <div class="message-card">
            <h4>${submission.name}</h4>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Subject:</strong> ${submission.subject}</p>
            <p><strong>Message:</strong> ${submission.message}</p>
            <p><strong>Date:</strong> ${submission.date}</p>
        </div>
    `).join('');
};

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Create submission object
    const newSubmission = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        date: new Date().toLocaleString()
    };

    // Add to array and localStorage
    submissions.unshift(newSubmission);
    localStorage.setItem('contactMessages', JSON.stringify(submissions));

    // Update display
    displayMessages();

    // Clear form
    e.target.reset();

    // Show success message
    alert('Message sent successfully!');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPreviousMessages();
    
    // Update current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});