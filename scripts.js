// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Dark mode toggle
  const toggleBtn = document.getElementById("darkToggle");
  const body = document.body;
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
  