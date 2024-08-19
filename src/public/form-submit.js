document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('[data-form-submit]');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form);

      try {
        const response = await fetch('/api/form-submit', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('Form submitted successfully');
          form.reset();
        } else {
          alert('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Form submission failed');
      }
    });
  });
});