document.getElementById('fetch-data-failure').addEventListener('click', () => {
    fetch('/api/secure-data', {
        headers: {
            'X-Forwarded-For': '192.168.1.100' // Simulasikan IP yang tidak diizinkan
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Access forbidden: Your IP is not allowed');
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
