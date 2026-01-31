// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger menu
            this.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mobileNav.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // Publication citation toggle functionality
    const publicationItems = document.querySelectorAll('.publication-item');
    
    publicationItems.forEach(item => {
        const shortVersion = item.querySelector('.pub-short');
        const apaVersion = item.querySelector('.pub-apa');
        const expandBtn = item.querySelector('.expand-btn');
        
        if (shortVersion && apaVersion && expandBtn) {
            // Click on entire short version or just the button
            shortVersion.addEventListener('click', function(e) {
                // Toggle the APA citation
                apaVersion.classList.toggle('active');
                
                // Update button text
                if (apaVersion.classList.contains('active')) {
                    expandBtn.textContent = '[hide APA]';
                } else {
                    expandBtn.textContent = '[show APA]';
                }
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
