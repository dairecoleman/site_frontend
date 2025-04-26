/*
    This is a JavaScript script that listens for users that 'submit' a contact message.
	It finds all contact forms on the page and takes over the normal POST method.
	Sends name, email and message fields as JSON.
	Either displays a success message or failed to send message.
    More control over process, page doesn't get reloaded and custom messages/info to user can be shown.
*/

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('#contact form');

  forms.forEach(function(form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  });
});
