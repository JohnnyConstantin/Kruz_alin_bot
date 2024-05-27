document.addEventListener('DOMContentLoaded', () => {
    const swipeContainer = document.querySelector('.swipe-container');
    const textBlocks = document.querySelectorAll('.text-block');
    const blockHeight = 70; // Высота блока (60px) + маржин (10px)
    const blocksToShow = 5;
    const scrollStep = blockHeight * blocksToShow;

    swipeContainer.addEventListener('scroll', () => {
        const scrollTop = swipeContainer.scrollTop;
        const maxScrollTop = swipeContainer.scrollHeight - swipeContainer.clientHeight;

        // Check if we are at the bottom or top and adjust scroll position
        if (scrollTop + swipeContainer.clientHeight >= maxScrollTop) {
            swipeContainer.scrollTop = maxScrollTop;
        } else if (scrollTop <= 0) {
            swipeContainer.scrollTop = 0;
        }
    });

    swipeContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        const scrollTop = swipeContainer.scrollTop;
        const direction = event.deltaY > 0 ? 1 : -1;
        const newScrollTop = scrollTop + (direction * scrollStep);

        swipeContainer.scrollTo({
            top: newScrollTop,
            behavior: 'smooth'
        });
    });
});
