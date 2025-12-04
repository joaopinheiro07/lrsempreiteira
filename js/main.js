document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            if (navList.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Reset hamburger
                const bars = mobileMenuBtn.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Smooth Scroll for Anchor Links (Polyfill for older browsers if needed, but CSS scroll-behavior handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70; // Height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (name === '' || phone === '') {
                alert('Por favor, preencha os campos obrigatórios (Nome e Telefone).');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Obrigado, ${name}! Recebemos sua solicitação de orçamento. Entraremos em contato em breve pelo número ${phone}.`);
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Scroll Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
