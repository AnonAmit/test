/* ============================================================
   Darpan Studio — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       Bottom Navigation — active state highlight
    ---------------------------------------------------------- */
    const navItems = document.querySelectorAll('[data-nav]');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => {
                i.classList.remove('text-red-600', 'font-bold', 'scale-110');
                i.classList.add('text-[#e5e2e1]/40');
            });
            item.classList.add('text-red-600', 'font-bold', 'scale-110');
            item.classList.remove('text-[#e5e2e1]/40');
        });
    });

    /* ----------------------------------------------------------
       Contact Form — basic submit handler
    ---------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your inquiry has been received. We will be in touch shortly.');
            contactForm.reset();
        });
    }

});

/* ----------------------------------------------------------
   Video Modal Functions
---------------------------------------------------------- */
function openVideoModal(videoId) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    if (modal && iframe) {
        // Simplified URL - sometimes fewer params = fewer errors on restricted videos
        iframe.src = 'https://www.youtube.com/embed/' + videoId;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    if (modal && iframe) {
        modal.classList.add('hidden');
        iframe.src = '';
        document.body.style.overflow = '';
    }
}


/* ----------------------------------------------------------
   Wedding Collections — WhatsApp Plan Selection
---------------------------------------------------------- */
const planMessages = {
    'Basic': 'Hello, I am interested in your Basic Wedding Collection package. I would like to know more details about pricing, availability, and deliverables.',
    'Gold': 'Hello, I am interested in your Gold Wedding Collection package. Please share complete details about pricing, cinematic film, album, and booking process.',
    'Platinum': 'Hello, I am interested in your Platinum Wedding Collection package. I would like full details about multi-day coverage, feature film, albums, and final pricing.'
};

document.querySelectorAll('[data-plan]').forEach(button => {
    const plan = button.getAttribute('data-plan');
    if (planMessages[plan]) {
        const encodedMessage = encodeURIComponent(planMessages[plan]);
        button.href = 'https://wa.me/918354038561?text=' + encodedMessage;
    }
});

/* ----------------------------------------------------------
   Mobile Menu Toggle
---------------------------------------------------------- */
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (menuIcon && mobileMenu && closeMenu) {
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('opacity-0');
            document.body.style.overflow = 'hidden';
        }, 10);
    });

    const closeMobileMenu = () => {
        mobileMenu.classList.add('opacity-0');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    };

    closeMenu.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}


/* ----------------------------------------------------------
   Offer Countdown Timer
---------------------------------------------------------- */
function startOfferTimer() {
    const timerDisplay = document.getElementById('offer-timer');
    if (!timerDisplay) return;

    let timeRemaining = 10 * 60; // 10 minutes default
    
    // Check if there's a saved end time in localStorage for continuity across refreshes
    const savedEndTime = localStorage.getItem('darpan_offer_end_time');
    const now = Math.floor(Date.now() / 1000);

    if (savedEndTime && savedEndTime > now) {
        timeRemaining = savedEndTime - now;
    } else {
        localStorage.setItem('darpan_offer_end_time', now + timeRemaining);
    }

    const interval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerDisplay.textContent = \\:\ mins\;

        if (timeRemaining <= 0) {
            // Reset to 10 minutes when it reaches 0
            timeRemaining = 10 * 60;
            localStorage.setItem('darpan_offer_end_time', Math.floor(Date.now() / 1000) + timeRemaining);
        } else {
            timeRemaining--;
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', startOfferTimer);

