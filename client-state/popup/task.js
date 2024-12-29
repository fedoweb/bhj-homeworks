const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");

    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    };
};

if(!(getCookie('showmodal'))) {

    const modal = document.getElementById('subscribe-modal');

    window.onload = function() {
        setTimeout(() => {
            modal.classList.add('modal_active');
        }, 500);
    };

    const closeButton = document.querySelector('.modal__close');
    closeButton.addEventListener('click', () => {
        document.cookie = 'showmodal=true';
        modal.classList.remove('modal_active');
    });
};


