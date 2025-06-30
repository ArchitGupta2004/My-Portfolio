// Toggling menu and navbar visibility
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x'); // Change menu icon to close icon
    Navbar.classList.toggle('active'); // Toggle active class on navbar
}

// Section scroll animation and active link highlighting
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Scroll effect for each section
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset for section start
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id'); // Get the section ID

        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation'); // Add animation class to section when in view

            // Remove active class from all links
            navlink.forEach(links => {
                links.classList.remove('active');
            });

            // Add active class to the current link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header effect
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100); // Make header sticky after scrolling down 100px

    // Close menu when scrolling
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
}

// WhatsApp message link functionality
const whatsappButton = document.createElement('a');
whatsappButton.href = "https://wa.me/917237048526?text=Hello%20Archit,%20I%20have%20a%20question%20about%20your%20portfolio!";
whatsappButton.target = "_blank";
whatsappButton.textContent = "Contact me on WhatsApp";

// Optionally, you can append this button to a specific section, for example:
document.querySelector('.contact').appendChild(whatsappButton);

        // JavaScript to handle form submission and send message to WhatsApp
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Collecting values from the form
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // WhatsApp API URL with pre-filled message
            var whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;

            // WhatsApp link
            var whatsappLink = `https://wa.me/+917237048526?text=${encodeURIComponent(whatsappMessage)}`;

            // Redirect to WhatsApp
            window.open(whatsappLink, '_blank');
        });
