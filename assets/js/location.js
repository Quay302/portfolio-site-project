document.addEventListener('DOMContentLoaded', () => {
    fetch(window.location.href, { method: 'HEAD' })
        .then(response => {
            const country = response.headers.get('CloudFront-Viewer-Country') || 'Unavailable';
            const region = response.headers.get('CloudFront-Viewer-Region') || 'Unavailable';
            const city = response.headers.get('CloudFront-Viewer-City') || 'Unavailable';

            document.getElementById('country').textContent = country;
            document.getElementById('region').textContent = region;
            document.getElementById('city').textContent = city;
        })
        .catch(err => console.error('Error retrieving location:', err));
});