document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.theme-buttons img');
    const images = document.querySelectorAll('.theme-screen-img');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            images.forEach(img => {
                if (img.src.includes(theme)) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        });
    });
});
