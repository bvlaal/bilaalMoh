/* Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');
const contactBtn = document.querySelector('.contact-btn');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA Button Scroll
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Contact Button Alert

//contactBtn.addEventListener('click', () => {
  //  alert('Thank you for reaching out! We will contact you soon.');
//});

// Toggle Navbar on Small Screens
function toggleNavbar() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleNavbar);

// Form Validation
function validateForm() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// New Contact Form Validation
//const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
    const emailInput = document.querySelector('#contact-email');
    const messageInput = document.querySelector('#contact-message');

    if (emailInput.value === '' || messageInput.value === '') {
        alert('Please enter both your email and message before submitting.');
    } else {
        alert('Thank you for your message. We will get back to you soon!');
    }
});
*/

// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-links a');


navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA Button Scroll
//const ctaBtn = document.querySelector('.cta-btn');
const contactBtn = document.getElementsByClassName('.contact-btn');
contactBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Toggle Navbar on Small Screens
function toggleNavbar() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleNavbar);

// Form Validation
function validateForm() {
    const name = document.querySelector('#name') ? document.querySelector('#name').value : '';
    const email = document.querySelector('#email') ? document.querySelector('#email').value : '';
    const message = document.querySelector('#message') ? document.querySelector('#message').value : '';

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// New Contact Form Validation
contactBtn.addEventListener('click', () => {
    const emailInput = document.querySelector('#contact-email');
    const messageInput = document.querySelector('#contact-message');

    if (!emailInput || !messageInput) {
        alert('Form elements not found. Please ensure the form is correctly added to the HTML.');
        return;
    }

    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please enter both your email and message before submitting.');
    } else if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Thank you for your message. We will get back to you soon!');
        emailInput.value = '';
        messageInput.value = '';
    }
});

// Email Validation Helper Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
