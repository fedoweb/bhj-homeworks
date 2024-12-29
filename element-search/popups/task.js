const modalMain = document.getElementById('modal_main');

window.onload = function() {
    modalMain.classList.add('modal_active');
};

const succesBtn = document.querySelector('.show-success');
succesBtn.addEventListener('click', () => {
    const modalSuccess = document.getElementById('modal_success');

    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});

const closeButtons = document.querySelectorAll('.modal__close_times');
for(const btn of closeButtons) {
    btn.addEventListener('click', () => {
        document.querySelector('.modal_active').classList.remove('modal_active');
    });
};

