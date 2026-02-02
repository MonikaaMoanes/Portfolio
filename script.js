// Year
document.getElementById("year").textContent = new Date().getFullYear();

// EmailJS init (PUBLIC KEY only)
emailjs.init("i14Kk5_XUOYyYpYtT");

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Scroll progress bar
const progress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${pct}%`;
});

// Contact form (EmailJS)
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector('button[type="submit"]');
  const oldText = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Sending...";

  emailjs
    .sendForm("service_0knzebc", "template_lars4w3", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("❌ Could not send message. " + (error?.text || ""));
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = oldText;
    });
});







