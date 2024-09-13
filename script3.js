document.addEventListener('DOMContentLoaded', function() {
    const healthAdviceSection = document.querySelector('.health-advice');

    function handleScroll() {
        const sectionPosition = healthAdviceSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionPosition < viewportHeight) {
            healthAdviceSection.classList.add('show-health-advice');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load to check initial position
});