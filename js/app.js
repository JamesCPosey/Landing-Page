document.addEventListener('DOMContentLoaded', function() {
    // Define objects
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar__list');
    const fireworksContainer = document.querySelector('.fireworks-container');

    // Function to create the navigation bar dynamically
    function createNavbar() {
        sections.forEach(section => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>`;
            navbar.appendChild(listItem);
        });
    }

    createNavbar(); // Call the function to create the navbar

    // Function to set the active section and highlight corresponding navigation item
    function setActiveSection() {
        let found = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && !found) {
                section.classList.add('your-active-class');
                const activeNav = navbar.querySelector(`[href="#${section.id}"]`);
                activeNav.classList.add('active');
                found = true;
            } else {
                section.classList.remove('your-active-class');
                const inactiveNav = navbar.querySelector(`[href="#${section.id}"]`);
                inactiveNav.classList.remove('active');
            }
        });
    }

    // Function to handle smooth scrolling
    function scrollToSection(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });
    }
    
    // Function to create fireworks effect
    function createFirework() {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.top = `${Math.random() * 100}%`;
      fireworksContainer.appendChild(firework);
  
      setTimeout(() => {
        firework.remove();
      }, 2000);
    }
  
    function launchFireworks() {
      setInterval(createFirework, 3000); // Launch fireworks every 3 seconds
    }
  
    // Trigger fireworks on section load
    if (fireworksContainer) {
      launchFireworks();
    }

    // Add event listeners
    window.addEventListener('scroll', setActiveSection);
    navbar.querySelectorAll('.menu__link').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });
});
