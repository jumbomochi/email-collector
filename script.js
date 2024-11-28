document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;

    fetch('https://zwqil51ymk.execute-api.ap-southeast-1.amazonaws.com/prod', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'Thank you for submitting!';
            document.getElementById('nameInput').value = '';
            document.getElementById('emailInput').value = '';
        } else {
            document.getElementById('message').textContent = 'There was an error with the data. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'There was an error. Please try again.';
    });
});
