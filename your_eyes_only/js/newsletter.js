document.getElementById('newsletterForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ name, email }),
        });

        // Parse the JSON response
        const result = await response.json();

        if (response.ok) {
            // Hide the form and show the success message
            form.style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        } else {
            alert(result.message || 'There was an error submitting the form. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    }
});
