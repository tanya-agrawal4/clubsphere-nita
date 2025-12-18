document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cards = document.querySelectorAll(".club-card");

  function filterClubs() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    cards.forEach(card => {
      const clubName = card.querySelector("h3").innerText.toLowerCase();
      const clubCategory = card.dataset.category; // data-category

      const matchSearch =
        searchText === "" || clubName.includes(searchText);

      const matchCategory =
        selectedCategory === "all" ||
        clubCategory === selectedCategory;

      if (matchSearch && matchCategory) {
        card.style.display = "";   // 🔥 IMPORTANT
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterClubs);
  categoryFilter.addEventListener("change", filterClubs);

  // Initial render
  filterClubs();
});
