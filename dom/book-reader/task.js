
const smallSize = document.querySelector('.font-size_small');
const bigSize = document.querySelector('.font-size_big');
const books = document.querySelectorAll('.book');

const changeSize = function() {
    event.preventDefault();
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    this.classList.add('font-size_active');

    for (const book of books) {
        if(this === smallSize) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        }

        if(this === bigSize) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        }        
    }
};

smallSize.addEventListener('click', changeSize);
bigSize.addEventListener('click', changeSize);


const blackText = document.querySelector('.text_color_black');
const grayText = document.querySelector('.text_color_gray');
const whiteText = document.querySelector('.text_color_whitesmoke');

const changeTextColor = function() {
    event.preventDefault();
    document.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    
    for (const book of books) {
      
        if (this === grayText) {
            book.classList.remove('book_color-black');
            book.classList.add('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }

        if (this === whiteText) {
            book.classList.remove('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.add('book_color-whitesmoke');
        }

        if (this === blackText) {
            book.classList.add('book_color-black');
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
        }
    }       
}

blackText.addEventListener('click', changeTextColor);
grayText.addEventListener('click', changeTextColor);
whiteText.addEventListener('click', changeTextColor);


const blackBg = document.querySelector('.bg_color_black');
const grayBg = document.querySelector('.bg_color_gray');
const whiteBg = document.querySelector('.bg_color_white');

const changeBackground = function() {
    event.preventDefault();
    document.querySelector('.color_active').classList.remove('color_active');
    this.classList.add('color_active');
    
    for (const book of books) {
      
        if (this === blackBg) {
            book.classList.add('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.remove('book_bg-white');
        }

        if (this === grayBg) {
            book.classList.remove('book_bg-black');
            book.classList.add('book_bg-gray');
            book.classList.remove('book_bg-white');
        }

        if (this === whiteBg) {
            book.classList.remove('book_bg-black');
            book.classList.remove('book_bg-gray');
            book.classList.add('book_bg-white');
        }
    }       
}

blackBg.addEventListener('click', changeBackground);
grayBg.addEventListener('click', changeBackground);
whiteBg.addEventListener('click', changeBackground);