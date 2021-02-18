// Add squares
const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
    const level = Math.floor(Math.random() * 3);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}

//window to input mood data
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


//open data input window
squares.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

})

//close data input window
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

})

//if enter sad or gloomy, pop up message that it will get better
//if enter happy, pop up message that I'm glad you're having a good day