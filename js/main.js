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
       Menu Icon — toggle
    ---------------------------------------------------------- */
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            console.log('Menu clicked');
        });
    }

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
        // Added origin and other params to help with embedding restrictions
        const origin = window.location.origin;
        iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1&origin=' + origin;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}`n
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    if (modal && iframe) {
        modal.classList.add('hidden');
        iframe.src = '';
        document.body.style.overflow = '';
    }
}
