


AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstname = document.getElementById('firstname').value.trim();
    let lastname = document.getElementById('lastname').value.trim();
    let emailid = document.getElementById('emailid').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('error-message');

    if (firstname === '' || lastname === '' || emailid === '' || subject === '' || message === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(emailid)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
});

function validateEmail(emailid) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(emailid).toLowerCase());
}
