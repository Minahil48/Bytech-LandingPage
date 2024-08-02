document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.querySelector('#fullName').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields.');
                return;
            }
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
});
