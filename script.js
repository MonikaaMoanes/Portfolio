// =====================
// Dynamic Greeting
// =====================
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

// =====================
// Smooth Scrolling
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =====================
// Resume Button
// =====================
document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("Monika_Moanes_Resume.pdf", "_blank");
});

// =====================
// Contact Form Submission
// =====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      alert(result.message);
      e.target.reset(); 
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  });
}


