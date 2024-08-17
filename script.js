document.getElementById('generate').addEventListener('click', function() {
    fetch('/generate-api-key', {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        const apiKeyDisplay = document.getElementById('blank2');
        apiKeyDisplay.innerHTML = 'Your API Key: <strong>' + data.api_Key + '</strong>';
        apiKeyDisplay.style.opacity = '0';
        setTimeout(() => {
            apiKeyDisplay.style.opacity = '1';
        }, 100);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('apiKeyDisplay').innerHTML = 'Error generating API Key';
    });
});







