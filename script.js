// Contact form submit handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
  });
  