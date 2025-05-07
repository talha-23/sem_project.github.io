const carItems = document.querySelectorAll('.car-item');
const slidesContainer = document.querySelector('.div3');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function slider(newIndex) {
    if (newIndex < 0) {
        index = Math.floor(carItems.length / 3) - 1; 
    } else if (newIndex >= Math.floor(carItems.length / 3)) {
        index = 0; 
    } else {
        index = newIndex;
    }

    const offset = -index * (100 / 3); 
    slidesContainer.style.transform = `translateX(${offset}%)`;
}
nextButton.addEventListener('click', () => slider(index + 1));
prevButton.addEventListener('click', () => slider(index - 1));


