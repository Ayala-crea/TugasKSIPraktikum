document.getElementById('fetch-data').addEventListener('click', () => {
    fetch('/api/secure-data') // Vercel otomatis mengarahkan ke serverless function
        .then((response) => {
            if (!response.ok) {
                throw new Error('Access denied or an error occurred.');
            }
            return response.json();
        })
        .then((data) => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            document.getElementById('output').textContent = error.message;
        });
});
