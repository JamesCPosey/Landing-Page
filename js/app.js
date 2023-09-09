document.addEventListener('DOMContentLoaded', function() {
    // Get all the sections in the document
    const sections = document.querySelectorAll('.section');

    // Generate navigation items dynamically
    const navbar = document.getElementById('navbar');
    const fragment = document.createDocumentFragment();

    sections.forEach(section => {
        // Create a list item for each section
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        // Set the text content and link for the navigation item
        link.textContent = section.querySelector('h2').textContent;
        link.href = `#${section.id}`;

        // Add the link to the list item, and list item to the fragment
        listItem.appendChild(link);
        fragment.appendChild(listItem);

        // Add an event listener to enable smooth scrolling to the section
        link.addEventListener('click', function(e) {
            e.preventDefault();
            section.scrollIntoView({behavior: 'smooth'});
        });
    });

    // Append the fragment to the navigation bar
    navbar.appendChild(fragment);

    // Function to set the active section in the navigation
    function setActiveSection() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const offsetTop = section.offsetTop;
            const offsetBottom = offsetTop + section.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                // Remove 'active' class from all navigation links
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });

                // Add 'active' class to the current section's navigation link
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add('active');
            }
        });
    }

    // Event listeners for scrolling and resizing to update active section
    window.addEventListener('scroll', setActiveSection);
    window.addEventListener('resize', setActiveSection);
    setActiveSection();

    let scrollingTimer;

    // Hide navigation bar when scrolling stops
    window.addEventListener('scroll', function() {
        clearTimeout(scrollingTimer);
        scrollingTimer = setTimeout(function() {
            navbar.style.opacity = 0;
            setTimeout(function() {
                navbar.style.display = 'none';
            }, 500);
        }, 1500);
    });

    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > window.innerHeight) {
            document.getElementById('scrollToTop').classList.remove('hidden');
        } else {
            document.getElementById('scrollToTop').classList.add('hidden');
        }
    });

    // Scroll to top button functionality
    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Toggle section content visibility
    document.querySelectorAll('.collapse-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('p');

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = 'Collapse';
            } else {
                content.style.display = 'none';
                this.textContent = 'Expand';
            }
        });
    });
});


