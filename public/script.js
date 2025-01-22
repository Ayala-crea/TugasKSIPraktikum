document.getElementById('check-ip-success').addEventListener('click', () => {
    const output = document.getElementById('output-success');
    const ip = document.getElementById('input-ip-success').value.trim();
    output.classList.remove('hidden');

    if (!ip) {
        output.textContent = 'Please enter a valid IP address.';
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
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = error.message;
        });
});

document.getElementById('check-ip').addEventListener('click', () => {
    const output = document.getElementById('output-failure');
    const ip = document.getElementById('input-ip').value.trim();
    output.classList.remove('hidden');

    if (!ip) {
        output.textContent = 'Please enter a valid IP address.';
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
            output.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            output.textContent = error.message;
        });
});
