function initializeContactForm() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("sWPGGhoaeseOu5QHP");
        console.log('EmailJS initialized successfully.');

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.removeEventListener('submit', handleFormSubmit);
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    } else {
        console.error('EmailJS is not defined. Make sure the SDK is loaded.');
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const serviceID = 'service_7kjeddl';
    const templateID = 'template_9o2955b';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('contact-form').reset();
            showConfirmationCard();
            document.getElementById('form-status').textContent = '';
        }, (err) => {
            document.getElementById('form-status').textContent = `Failed to send message: ${err}`;
        });
}

function showConfirmationCard() {
    const confirmationCard = document.getElementById('confirmation-card');
    const notification = document.getElementById('notification');

    confirmationCard.classList.remove('hidden');
    notification.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:translate-x-4');
    notification.classList.add('opacity-100', 'translate-y-0', 'sm:translate-x-0');
}

function hideConfirmationCard() {
    const confirmationCard = document.getElementById('confirmation-card');
    const notification = document.getElementById('notification');

    if (confirmationCard && notification) {
    notification.classList.remove('opacity-100', 'translate-y-0', 'sm:translate-x-0');
    notification.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:translate-x-4');

    setTimeout(() => {

        confirmationCard.classList.add('hidden');
    }, 300);
    }
}

document.getElementById('close-notification').addEventListener('click', hideConfirmationCard);

const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.type = "text/javascript";
script.onload = initializeContactForm;
script.onerror = function () {
    console.error('Failed to load EmailJS SDK.');
};
document.head.appendChild(script);

document.addEventListener('DOMContentLoaded', function() {
    barba.init({
        transitions: [{
            leave(data) {
                return gsap.to(data.current.container, { opacity: 0 });
            },
            enter(data) {
                return gsap.from(data.next.container, { opacity: 0 });
            },
            afterEnter() {
                initializeContactForm();
            }
        }]
    });
});