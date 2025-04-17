// Footer
document.getElementById("openModal").addEventListener("click", function() {
  document.getElementById("authorModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("authorModal").style.display = "none";
});

// Đóng khi click nền ngoài
window.onclick = function(e) {
  const modal = document.getElementById("authorModal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
