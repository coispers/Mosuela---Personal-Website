/* ===== Portfolio — Main Script ===== */

document.addEventListener('DOMContentLoaded', () => {
    // ===== Custom Cursor =====
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverTargets = document.querySelectorAll('a, button, .skill-card, .project-card, .nav-toggle');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('hovering');
            cursorOutline.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('hovering');
            cursorOutline.classList.remove('hovering');
        });
    });

    // ===== Intro Sequence =====
    const introOverlay = document.getElementById('introOverlay');
    const navbar = document.getElementById('navbar');
    let introDismissed = false;

    function dismissIntro() {
        if (introDismissed) return;
        introDismissed = true;
        introOverlay.classList.add('hidden');
        navbar.classList.add('visible');
        document.body.style.overflow = '';
        setTimeout(triggerHeroReveals, 300);
    }

    setTimeout(dismissIntro, 3500);

    introOverlay.addEventListener('click', dismissIntro);
    window.addEventListener('scroll', () => {
        if (!introDismissed) dismissIntro();
    }, { once: true });

    // ===== Hero Reveal Animations =====
    function triggerHeroReveals() {
        const heroReveals = document.querySelectorAll('.hero .reveal-up, .hero .reveal-right');
        heroReveals.forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 150);
        });
    }

    // ===== Video Modal =====
    const videoModal = document.getElementById('videoModal');
    const videoModalClose = document.getElementById('videoModalClose');
    const modalVideo = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const projectWebsiteLink = document.getElementById('projectWebsiteLink');
    const videoPlayBtns = document.querySelectorAll('.video-play-btn');

    function openVideoModal(videoId, websiteUrl, title, description) {
        // Set YouTube embed URL with autoplay
        modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        projectWebsiteLink.href = websiteUrl;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        modalVideo.src = ''; // Stop video by clearing src
    }

    // Close button
    if (videoModalClose) {
        videoModalClose.addEventListener('click', closeVideoModal);
    }

    // Click outside to close
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });

    // Play buttons on project cards
    videoPlayBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.project-card');
            const videoId = card.dataset.video;
            const websiteUrl = card.dataset.website;
            const title = card.dataset.title;
            const description = card.dataset.description;
            openVideoModal(videoId, websiteUrl, title, description);
        });
    });

    // Make project cards with video clickable
    const projectCards = document.querySelectorAll('.project-card[data-video]');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open if clicking on external links
            if (e.target.closest('a[href]')) return;

            const videoId = card.dataset.video;
            const websiteUrl = card.dataset.website;
            const title = card.dataset.title;
            const description = card.dataset.description;
            openVideoModal(videoId, websiteUrl, title, description);
        });
    });

    // ===== About Section Image Shuffle =====
    const aboutImgContainer = document.getElementById('aboutImgContainer');
    if (aboutImgContainer) {
        const aboutImages = aboutImgContainer.querySelectorAll('.about-img');
        let currentImageIndex = 0;

        function cycleAboutImages() {
            // Remove active class from current image
            aboutImages[currentImageIndex].classList.remove('about-img-active');

            // Move to next image
            currentImageIndex = (currentImageIndex + 1) % aboutImages.length;

            // Add active class to next image
            aboutImages[currentImageIndex].classList.add('about-img-active');
        }

        // Cycle images every 4 seconds
        setInterval(cycleAboutImages, 4000);
    }

    // ===== Magical Particles Background =====
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        // Create floating light particle
        function createLightParticle() {
            const particle = document.createElement('div');
            particle.className = 'light-particle';

            // Random size (3-8px)
            const size = 3 + Math.random() * 5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';

            // Random animation duration (3-6 seconds)
            const duration = 3 + Math.random() * 3;
            particle.style.animationDuration = duration + 's';

            // Random delay
            particle.style.animationDelay = Math.random() * 3 + 's';

            particlesContainer.appendChild(particle);

            // Remove and recreate
            setTimeout(() => {
                if (particle.parentNode) particle.parentNode.removeChild(particle);
                createLightParticle();
            }, duration * 1000 * 2);
        }

        // Create sparkle
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';

            // Random position
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';

            // Random animation duration (1.5-3 seconds)
            const duration = 1.5 + Math.random() * 1.5;
            sparkle.style.animationDuration = duration + 's';

            // Random delay
            sparkle.style.animationDelay = Math.random() * 2 + 's';

            particlesContainer.appendChild(sparkle);

            // Remove and recreate
            setTimeout(() => {
                if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
                createSparkle();
            }, duration * 1000 * 2);
        }

        // Create glowing orb
        function createGlowOrb() {
            const orb = document.createElement('div');
            orb.className = 'glow-orb';

            // Random size (20-50px)
            const size = 20 + Math.random() * 30;
            orb.style.width = size + 'px';
            orb.style.height = size + 'px';

            // Random position
            orb.style.left = Math.random() * 100 + '%';
            orb.style.top = Math.random() * 100 + '%';

            // Random animation duration (6-12 seconds)
            const duration = 6 + Math.random() * 6;
            orb.style.animationDuration = duration + 's';

            // Random delay
            orb.style.animationDelay = Math.random() * 4 + 's';

            particlesContainer.appendChild(orb);

            // Remove and recreate
            setTimeout(() => {
                if (orb.parentNode) orb.parentNode.removeChild(orb);
                createGlowOrb();
            }, duration * 1000 * 2);
        }

        // Initialize particles
        function initParticles() {
            // Detect mobile
            const isMobile = window.innerWidth <= 768;

            // Create light particles (more on mobile)
            const lightCount = isMobile ? (35 + Math.floor(Math.random() * 16)) : (20 + Math.floor(Math.random() * 11));
            for (let i = 0; i < lightCount; i++) {
                createLightParticle();
            }

            // Create sparkles (more on mobile)
            const sparkleCount = isMobile ? (25 + Math.floor(Math.random() * 11)) : (15 + Math.floor(Math.random() * 11));
            for (let i = 0; i < sparkleCount; i++) {
                createSparkle();
            }

            // Create glowing orbs (fewer on mobile)
            const orbCount = isMobile ? (3 + Math.floor(Math.random() * 3)) : (5 + Math.floor(Math.random() * 6));
            for (let i = 0; i < orbCount; i++) {
                createGlowOrb();
            }
        }

        // Start particles
        initParticles();

        // Recreate particles on visibility change (tab switch)
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                // Clear and reinitialize
                particlesContainer.innerHTML = '';
                initParticles();
            }
        });
    }

    // ===== Rotating Text =====
    const rotatingText = document.getElementById('rotatingText');
    const phrases = [
        'Full Stack Developer',
        'AI Powered Systems Developer',
        'Facial Recognition and Automation Systems',
        'Security & User Authentication',
        'Game Development (Godot/Gdevelop)',
        'SMS/OTP Authentication Integration',
        'ESL Tutor',
        'Former Radio Broadcaster & Event Host',

    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            rotatingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            rotatingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 300;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    setTimeout(typeEffect, 4000);

    // ===== Scroll Reveal (Intersection Observer) =====
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentElement;
                const siblings = parent ? parent.querySelectorAll('.reveal-up, .reveal-left, .reveal-right') : [];
                const index = Array.from(siblings).indexOf(entry.target);
                const delay = index * 100;

                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        if (!el.closest('.hero')) {
            revealObserver.observe(el);
        }
    });

    // ===== Navbar Scroll Effect =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 400) {
            navbar.classList.remove('visible');
        } else {
            navbar.classList.add('visible');
        }

        lastScroll = currentScroll;
    });

    // ===== Mobile Nav Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // ===== Counter Animation =====
    const statNumbers = document.querySelectorAll('.stat-number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                animateCounter(el, target);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(el, target) {
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    // ===== Tilt Effect on Cards =====
    const tiltCards = document.querySelectorAll('[data-tilt]');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -8;
            const rotateY = (x - centerX) / centerX * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });

    // ===== Magnetic Button Effect =====
    const magneticBtns = document.querySelectorAll('.btn-primary');

    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-2px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ===== Contact Form =====
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn-submit');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = '<span>Message Sent!</span><i class="fas fa-check"></i>';
        btn.style.background = 'linear-gradient(135deg, #059669, #10b981)';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== Active Nav Link on Scroll =====
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ===== Parallax on Hero =====
    const heroContent = document.querySelector('.hero-grid');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
        }
    });
});
