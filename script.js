// ✨ Fade-in on Scroll
const fadeElems = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeElems.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) el.classList.add("visible");
  });
});

// 📄 Resume Button
document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("Monika_Moanes_Resume.pdf", "_blank");
});

// ✉️ Contact Form  using DOM
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      alert(result.message);
      e.target.reset();
    } catch (err) {
      alert("Failed to send message. Please try again later.");
    }
  });
}



