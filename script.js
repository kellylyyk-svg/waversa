// ============================================
// Waversa Systems - Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // Community Accordion Functionality
    // ============================================
    // ============================================
    // Community Accordion Functionality
    // ============================================
    const communityItems = document.querySelectorAll('.community-item');

    communityItems.forEach(item => {
        item.addEventListener('click', function () {
            // Navigate to detail page (placeholder)
            window.location.href = '#details';
            console.log('Navigating to details page...');
        });
    });

    // ============================================
    // Smooth Scroll for Navigation Links
    // ============================================
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only apply smooth scroll for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateOnScroll = document.querySelectorAll('.product-card, .community-item, .brand-item');

    animateOnScroll.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });


    // ============================================
    // Product Card Hover Effects Enhancement - REMOVED per user request
    // ============================================

    // ============================================
    // Dynamic Wave Animation in Technology Section
    // ============================================
    const wavePaths = document.querySelectorAll('.waveform path');
    let waveOffset = 0;

    function animateWave() {
        waveOffset += 0.5;
        wavePaths.forEach((path, index) => {
            const offset = waveOffset + (index * 45);
            path.style.strokeDashoffset = offset;
        });
        requestAnimationFrame(animateWave);
    }

    if (wavePaths.length > 0) {
        wavePaths.forEach(path => {
            path.style.strokeDasharray = '200';
            path.style.strokeDashoffset = '0';
        });
        animateWave();
    }

    // ============================================
    // Page Load Animation
    // ============================================
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ============================================
    // Add Active State to Nav Links on Scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    function setActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);
});
