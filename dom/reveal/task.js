const reveals = document.querySelectorAll('.reveal');

const inViewport = function(reveal) {
    const revealTop = reveal.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (revealTop < windowHeight) {
        reveal.classList.add('reveal_active');
    }
}

reveals.forEach(reveal => {
    inViewport(reveal);
  });

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        inViewport(reveal);
    });
});


