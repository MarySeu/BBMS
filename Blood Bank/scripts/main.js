closeBtn.addEventListener('click', function() {
    const announcement = document.getElementsByClassName('promo-content'); // Get the announcement element
    if (announcement) { // Check if the announcement element exists
        announcement.style.display = 'none'; // Hide the announcement
    }
});