// Modal functionality
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeBtn = document.querySelector(".close-btn");

// Open modal
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
