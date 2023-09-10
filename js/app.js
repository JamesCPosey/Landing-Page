document.addEventListener('DOMContentLoaded', function() {
    // Define objects
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar__list');
    const collapsibleButtons = document.querySelectorAll('.collapsible');

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
    let isScrolling;

window.addEventListener('scroll', function (event) {
    window.clearTimeout(isScrolling);
    navbar.style.display = 'block';

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
        navbar.style.display = 'none';
    }, 2000);
});

/* Added listeners to make sure navbar is visible when mousing over top of screen */
window.addEventListener('mouseover', function () {
    navbar.style.display = 'block';
});

window.addEventListener('mouseout', function () {
    isScrolling = setTimeout(function () {
        navbar.style.display = 'none';
    }, 2000);
});


    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

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
    
 // Function to create a firework particle
 function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speedY = -Math.random() * 3;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }

  // Function to draw a firework particle
  Particle.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };

  // Function to create explosions
  function createExplosion(x, y) {
    for (let i = 0; i < 100; i++) {
      const particle = new Particle(x, y);
      particles.push(particle);
    }
  }

  // Function to animate the fireworks
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
      if (particle.size <= 0.2) {
        particles.splice(index, 1);
      } else {
        particle.size -= 0.05;
        particle.y += particle.speedY;
        particle.draw();
      }
    });
    requestAnimationFrame(animate);
  }

  // Event listener for fireworks
  document.getElementById('section2').addEventListener('mouseenter', function () {
    const fireworksContainer = this.querySelector('.fireworks-container');
    const rect = this.getBoundingClientRect();
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;

    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
});
  
  // triggers buttons  
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function () {
          const content = this.nextElementSibling;
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
      });
    
    // Add event listeners
    window.addEventListener('scroll', setActiveSection);
    navbar.querySelectorAll('.menu__link').forEach(anchor => {
        anchor.addEventListener('click', scrollToSection);
    });
});
