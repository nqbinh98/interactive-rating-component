const allRatingBtns = document.querySelectorAll('.rating-btn');
const wrapperRatingBtns = document.querySelector('.wrapper-rating-btns');

const submitBtn = document.querySelector('.submit-btn');
const ratingState = document.querySelector('.rating-state');
const thanksState = document.querySelector('.thanks-state');
const ratingResult = document.querySelector('.rating-result');
const errorMsg = document.querySelector('.error-msg');

let dataSubmit = '';
let state = 'rating';
let isError = false;

submitBtn.addEventListener('click', function () {
    if (dataSubmit) {
        isError = false;
        ratingResult.innerHTML = dataSubmit;
        state = 'thanks';
        changeState();
    } else {
        isError = true;
        errorNotification()
    }
})

wrapperRatingBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains('rating-btn')) {
        isError = false;
        errorNotification()
        if (e.target.classList.contains('active')) {
            return;
        } else {
            removeActiveRatingBtn();
            dataSubmit = e.target.dataset.rating
            e.target.classList.add('active');
        }
    }
})

function removeActiveRatingBtn () {
    allRatingBtns.forEach(btn => {
        btn.classList.remove('active');
    })
}

function changeState () {
    if (state === 'thanks') {
        ratingState.classList.add('hide');
        thanksState.classList.remove('hide');
    } else {
        ratingState.classList.remove('hide');
        thanksState.classList.add('hide');
    }
}

function errorNotification () {
    if (isError === true) {
        errorMsg.classList.remove('hide');
    } else {
        errorMsg.classList.add('hide');
    }
}