// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
    });

    // Update active button
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Change nav button style on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(currentSection) ||
            (currentSection === 'welcome' && btn.textContent.toLowerCase().includes('home'))) {
            btn.classList.add('active');
        }
    });
});

// Initialize - highlight first nav button
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.nav-button').classList.add('active');
});