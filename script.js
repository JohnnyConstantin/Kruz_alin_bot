document.addEventListener('DOMContentLoaded', () => {
    const swipeContainer = document.querySelector('.swipe-container');
    const swipeContent = document.querySelector('.swipe-content');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const textBlocks = document.querySelectorAll('.text-block');
    const blocksToShow = 5;
    const totalBlocks = textBlocks.length;
    const blockWidth = swipeContainer.clientWidth;
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalBlocks - blocksToShow;
    }

    function slideToIndex(index) {
        swipeContent.style.transform = `translateX(-${index * blockWidth}px)`;
        currentIndex = index;
        updateButtons();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            slideToIndex(currentIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalBlocks - blocksToShow) {
            slideToIndex(currentIndex + 1);
        }
    });

    // Initialize
    updateButtons();
});
