// Fonction pour initialiser le formulaire de contact
function initializeContactForm() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("sWPGGhoaeseOu5QHP");
        console.log('EmailJS initialized successfully.');

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();

                console.log('Form submission intercepted.');

                const serviceID = 'service_7kjeddl';
                const templateID = 'template_9o2955b';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        // Cacher le formulaire
                        document.getElementById('contact-form').style.display = 'none';

                        // Afficher la carte de confirmation
                        document.getElementById('confirmation-card').style.display = 'block';

                        // Optionnel : Effacer le message de statut du formulaire s'il existe
                        document.getElementById('form-status').textContent = '';
                    }, (err) => {
                        document.getElementById('form-status').textContent = `Failed to send message: ${err}`;
                    });
            });
        }
    } else {
        console.error('EmailJS is not defined. Make sure the SDK is loaded.');
    }
}

// Charger EmailJS
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.type = "text/javascript";
script.onload = initializeContactForm;
script.onerror = function () {
    console.error('Failed to load EmailJS SDK.');
};
document.head.appendChild(script);

// Réinitialisation lors des transitions de Barba.js
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
                // Réinitialiser le formulaire de contact après la transition
                initializeContactForm();
            }
        }]
    });
});
