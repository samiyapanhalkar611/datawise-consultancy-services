// Initialize EmailJS
emailjs.init('OUm9Vcrt3Yx1drAzs');

document.getElementById('btn').addEventListener('click', function(e) {
  e.preventDefault();

  var name    = document.getElementById('name').value.trim();
  var email   = document.getElementById('email').value.trim();
  var phone   = document.getElementById('phone').value.trim();
  var message = document.getElementById('message').value.trim();

  // Validation - Show SweetAlert warning if fields missing
  if (!name || !email || !phone || !message) {
    Swal.fire({
      title: 'Missing Information',
      text: 'Please fill in all fields before sending.',
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#fb8c00'
    });
    return; // Stop here - no success popup
  }

  // Show loading
  var loadingEl = document.querySelector('.loading');
  if (loadingEl) loadingEl.style.display = 'block';

  // Send email
  emailjs.send('service_9l8n3u2', 'template_gxylija', {
    from_name:  name,
    from_email: email,
    phone:      phone,
    message:    message
  })
  .then(function() {
    // Hide loading
    if (loadingEl) loadingEl.style.display = 'none';
    
    // Show SUCCESS SweetAlert
    Swal.fire({
      title: 'Message Sent!',
      text: 'Message Sent Successfully',
      icon: 'success',
      confirmButtonColor: '#1a73e8',
      confirmButtonText: 'OK'
    }).then(() => {
      // Reset form after user clicks OK
      document.querySelector('.php-email-form').reset();
      
      // Optional: Show sent message briefly
      var sentMsg = document.querySelector('.sent-message');
      if (sentMsg) sentMsg.style.display = 'block';
      setTimeout(() => {
        if (sentMsg) sentMsg.style.display = 'none';
      }, 3000);
    });
  })
  .catch(function(error) {
    // Hide loading
    if (loadingEl) loadingEl.style.display = 'none';
    
    // Show ERROR SweetAlert
    Swal.fire({
      title: 'Failed to Send',
      text: 'Failed to send. Please try again.',
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Try Again'
    });
    
    // Optional: Show error message
    var errorMsg = document.querySelector('.error-message');
    if (errorMsg) {
      errorMsg.style.display = 'block';
      errorMsg.textContent = 'Failed to send. Please try again.';
      setTimeout(() => {
        if (errorMsg) errorMsg.style.display = 'none';
      }, 3000);
    }
  });
});