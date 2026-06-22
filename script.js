function openModal() {
  document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

/* Mobile Menu */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/* Auto close menu when link clicked */
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

/* Close modal when clicking outside */
window.addEventListener('click', (e) => {
  const modal = document.getElementById('contactModal');

  if (e.target === modal) {
    closeModal();
  }
});