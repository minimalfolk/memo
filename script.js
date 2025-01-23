document.addEventListener("DOMContentLoaded", function () {
  const memoryForm = document.getElementById("memory-form");
  const memoryList = document.getElementById("memory-list");
  let memories = JSON.parse(localStorage.getItem("memories")) || [];

  function displayMemories() {
    memoryList.innerHTML = ""; // Clear the memory list

    memories.forEach((memory, index) => {
      const card = document.createElement("div");
      card.classList.add("memory-card");
      card.style.borderLeft = `5px solid ${memory.color}`;

      const memoryDetails = `
        <h3>${memory.topic}</h3>
        <p class="category">${memory.category}</p>
        <p class="memory-details">${memory.details}</p>
        <button class="view-more">View More</button>
        <small>${memory.date}</small>
      `;
      card.innerHTML = memoryDetails;

      const viewMoreButton = card.querySelector(".view-more");
      const memoryText = card.querySelector(".memory-details");

      viewMoreButton.addEventListener("click", () => {
        memoryText.classList.toggle("expanded");
        viewMoreButton.textContent = memoryText.classList.contains("expanded")
          ? "View Less"
          : "View More";
      });

      memoryList.appendChild(card);
    });
  }

  memoryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const category = document.getElementById("memory-category").value;
    const topic = document.getElementById("memory-topic").value;
    const details = document.getElementById("memory-details").value;

    const newMemory = {
      category,
      topic,
      details,
      date: new Date().toLocaleString(),
      color: getCategoryColor(category),
    };

    memories.push(newMemory);
    localStorage.setItem("memories", JSON.stringify(memories));
    memoryForm.reset();
    displayMemories();
  });

  function getCategoryColor(category) {
    switch (category) {
      case "Personal":
        return "blue";
      case "Family":
        return "skyblue";
      case "Achievement":
        return "yellow";
      case "Relationship":
        return "lightcoral";
      default:
        return "gray";
    }
  }

  displayMemories();
});
