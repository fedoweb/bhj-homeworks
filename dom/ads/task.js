function startRotator(rotator) {

    let timeInterval = 1000;
    console.log(timeInterval);

    
    let activeElement = rotator.querySelector('.rotator__case_active');
    let nextElement = activeElement.nextElementSibling;
    let speed = 1000;


    function changeElement() {
        activeElement.classList.remove('rotator__case_active');

        if (!nextElement) {
            nextElement =  activeElement.parentElement.firstElementChild;
            }

        let color = nextElement.getAttribute('data-color') || 'black';

        speed = Number(nextElement.getAttribute('data-speed')) || 1000;
            console.log(speed);
        nextElement.classList.add('rotator__case_active');
        nextElement.style.color = color;
        
        activeElement = nextElement;
        nextElement = nextElement.nextElementSibling;

        setTimeout(changeElement, speed);
    }

changeElement();    

}   
    

const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  startRotator(rotator);
});


