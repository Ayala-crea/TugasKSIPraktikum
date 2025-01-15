document.getElementById('check-ip').addEventListener('click', () => {
    const ip = document.getElementById('input-ip').value.trim();
    if (!ip) {
        document.getElementById('output-failure').textContent = 'Please enter a valid IP address.';
        return;
    }

    fetch(`/api/secure-data?ip=${ip}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Access forbidden: The provided IP is not allowed.');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('output-failure').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('output-failure').textContent = error.message;
        });
});
