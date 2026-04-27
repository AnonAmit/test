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
            // Remove active state from all items
            navItems.forEach(i => {
                i.classList.remove('text-red-600', 'font-bold', 'scale-110');
                i.classList.add('text-[#e5e2e1]/40');
            });
            // Apply active state to clicked item
            item.classList.add('text-red-600', 'font-bold', 'scale-110');
            item.classList.remove('text-[#e5e2e1]/40');
        });
    });

    /* ----------------------------------------------------------
       Menu Icon — toggle (placeholder for drawer/sidebar)
    ---------------------------------------------------------- */
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            // TODO: open side drawer / navigation menu
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
            // TODO: wire up to your backend / email service
            alert('Thank you! Your inquiry has been received. We will be in touch shortly.');
            contactForm.reset();
        });
    }

});
