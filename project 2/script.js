// Get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default behavior of link (redirecting to href)
    e.preventDefault();});
  });
    // Get id of section to scroll to
    const sectionId = e.target.getAttribute('href');
  