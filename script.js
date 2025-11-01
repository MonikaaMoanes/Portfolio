// Dynamic Greeting
const greetingElement = document.createElement('h3');
const hour = new Date().getHours();
let greetingText = '';

if (hour < 12) {
  greetingText = '☀️ Good Morning!';
} else if (hour < 18) {
  greetingText = '🌤️ Good Afternoon!';
} else {
  greetingText = '🌙 Good Evening!';
}

greetingElement.textContent = greetingText;
greetingElement.style.textAlign = 'center';
greetingElement.style.color = '#1d3557';
greetingElement.style.marginTop = '10px';

document.querySelector('.container').prepend(greetingElement);
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Download Resume
document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("Monika_Moanes_Resume.pdf", "_blank");
});

