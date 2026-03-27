document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile Filter Toggle (Products Page)
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    const filterSidebar = document.getElementById('filter-sidebar');
    const mobileFilterIcon = document.getElementById('mobile-filter-icon');

    if (mobileFilterBtn && filterSidebar) {
        mobileFilterBtn.addEventListener('click', () => {
            filterSidebar.classList.toggle('hidden');
            if(mobileFilterIcon) {
                mobileFilterIcon.classList.toggle('rotate-180');
            }
        });
    }

    // Scroll Animation Observer (Fade up effect)
    const fadeUpElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeUpElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('header') || document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('shadow-lg');
                navbar.classList.add('bg-transparent');
            }
        });
    }

    // Update active link
    const pathName = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === pathName.split('/').pop() || (pathName === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('text-synerg-500', 'font-semibold');
            link.classList.remove('text-gray-300');
        }
    });
});
