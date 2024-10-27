const typed = new Typed('.text', {
    strings: ["Full Stack Developer", "UI Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Message sent!'); // Display a simple alert on form submission

    // You can add additional code here to handle form submission, 
    // such as sending the data to a server or an email.
});


