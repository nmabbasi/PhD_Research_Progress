// Smooth scrolling and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navigation
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial call to set active link
    updateActiveNavLink();

    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.overview-card, .tool-card, .result-card, .question-card, .database-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects to external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add copy functionality to code elements
    const codeElements = document.querySelectorAll('code');
    codeElements.forEach(code => {
        code.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                // Show temporary tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #2d3748;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    z-index: 1000;
                    pointer-events: none;
                `;
                
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + 'px';
                tooltip.style.top = (rect.top - 30) + 'px';
                
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 1000);
            });
        });
        
        // Add cursor pointer to indicate clickable
        code.style.cursor = 'pointer';
        code.title = 'Click to copy';
    });

    // Add search functionality (basic)
    function addSearchFunctionality() {
        // Create search input
        const searchContainer = document.createElement('div');
        searchContainer.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
                <input type="text" id="searchInput" placeholder="Search content..." 
                       style="padding: 8px 12px; border: 2px solid #e2e8f0; border-radius: 20px; 
                              background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                              width: 200px; font-size: 14px;">
            </div>
        `;
        document.body.appendChild(searchContainer);

        const searchInput = document.getElementById('searchInput');
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const searchTerm = this.value.toLowerCase();
                const allTextElements = document.querySelectorAll('p, h1, h2, h3, h4, li, td');
                
                // Remove previous highlights
                allTextElements.forEach(el => {
                    el.innerHTML = el.innerHTML.replace(/<mark[^>]*>(.*?)<\/mark>/gi, '$1');
                });

                if (searchTerm.length > 2) {
                    allTextElements.forEach(el => {
                        if (el.textContent.toLowerCase().includes(searchTerm)) {
                            const regex = new RegExp(`(${searchTerm})`, 'gi');
                            el.innerHTML = el.innerHTML.replace(regex, '<mark style="background: #ffd700; padding: 2px 4px; border-radius: 2px;">$1</mark>');
                        }
                    });
                }
            }, 300);
        });
    }

    // Initialize search functionality
    addSearchFunctionality();

    // Add print functionality
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Print';
        printButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 16px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            font-weight: 500;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        printButton.addEventListener('click', () => window.print());
        printButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        });
        printButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
        });
        
        document.body.appendChild(printButton);
    }

    // Initialize print button
    addPrintButton();

    // Add back to top functionality
    function addBackToTopButton() {
        const backToTopButton = document.createElement('button');
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopButton.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: #2d3748;
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(45, 55, 72, 0.3);
            z-index: 1000;
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
        `;
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
            }
        });
        
        document.body.appendChild(backToTopButton);
    }

    // Initialize back to top button
    addBackToTopButton();

    // Add table responsiveness
    const tables = document.querySelectorAll('.data-table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'overflow-x: auto; margin: 1rem 0;';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    // Add loading animation (fade in effect)
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('Sezary Syndrome Research Website loaded successfully!');
});

