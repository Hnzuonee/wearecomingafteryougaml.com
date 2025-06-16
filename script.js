document.addEventListener('DOMContentLoaded', () => {
    
    // Find the like button on the portfolio page
    const likeBtn = document.getElementById('likeBtn');

    // If the button exists on the page, add an event listener
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            // Toggles a CSS class that visually changes the button.
            // This is a purely client-side, "fake" interaction.
            likeBtn.classList.toggle('liked');

            if (likeBtn.classList.contains('liked')) {
                likeBtn.innerHTML = '❤️ Thank you!';
            } else {
                likeBtn.innerHTML = '❤️ Give me a heart';
            }
        });
    }
});
