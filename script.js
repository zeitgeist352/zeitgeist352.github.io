// Highlight the nav link of the section currently in view
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...navLinks]
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
