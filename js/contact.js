// Include the EmailJS SDK
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
script.type = "text/javascript";

script.onload = function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("sWPGGhoaeseOu5QHP");
        console.log('EmailJS initialized successfully.');

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();

            console.log('Form submission intercepted.');

            const serviceID = 'service_7kjeddl';
            const templateID = 'template_9o2955b';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    // Hide the form
                    document.getElementById('contact-form').style.display = 'none';

                    // Show the confirmation card
                    document.getElementById('confirmation-card').style.display = 'block';

                    // Optional: Clear form status message if it exists
                    document.getElementById('form-status').textContent = '';
                }, (err) => {
                    document.getElementById('form-status').textContent = `Failed to send message: ${err}`;
                });
        });

        window.reinitializeContact = function () {
            // Logic to reinitialize contact page if necessary
            console.log('Reinitializing contact page...');
            // Re-add event listeners or reset states as needed
        };
    } else {
        console.error('EmailJS is not defined. Make sure the SDK is loaded.');
    }
};

// Handle script load errors
script.onerror = function () {
    console.error('Failed to load EmailJS SDK.');
};

// Append the script to the document head
document.head.appendChild(script);

function initializeContact() {
    // Call the script onload function to set up everything
    script.onload();
}
