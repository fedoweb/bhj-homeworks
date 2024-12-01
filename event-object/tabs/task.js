const navigation = Array.from(document.querySelectorAll('.tab'));


navigation.forEach(function(item, index) {
    const content = Array.from(document.querySelectorAll('.tab__content'));
    

    item.addEventListener('click', () => {
        const navigationActive = Array.from(document.querySelectorAll('.tab_active'));

        navigationActive.forEach(item => {
            item.classList.remove('tab_active');
        });

        item.classList.add('tab_active');
    });

    item.addEventListener('click', () => {
        const contentActive = Array.from(document.querySelectorAll('.tab__content_active'));

        contentActive.forEach(item => {
            item.classList.remove('tab__content_active')
        });

        content[index].classList.add('tab__content_active');
    }
    );
});