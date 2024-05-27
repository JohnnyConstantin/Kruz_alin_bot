document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text-block');

    textBlocks.forEach(block => {
        block.addEventListener('click', () => {
            alert(`You clicked: ${block.textContent}`);
        });
    });

    // Для свайпа можно добавить логику, если требуется
});
