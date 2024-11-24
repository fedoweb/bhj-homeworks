
let startTimer = function() {
    const timer = document.getElementById("timer");
    let initSeconds = Number(timer.textContent);
    let intervalId;


    intervalId = setInterval(function() {
        const hours = Math.floor(initSeconds / 3600);
        const minutes = Math.floor((initSeconds % 3600) / 60);
        const seconds = initSeconds % 60;

        const formattedTime = `${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:
        ${String(seconds).padStart(2, '0')}`;


        timer.textContent = formattedTime;

        initSeconds -= 1;

        if (initSeconds < 0) {
            //alert("Вы победили в конкурсе!");
            clearInterval(intervalId);
            startDownload();
        }
    }, 1000);
}

function startDownload() {
    const link = document.createElement('a');
    link.href = 'https://yandex.ru/images/search?img_url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPRgAMBZB1PE%2Fmaxresdefault_live.jpg&lr=35&pos=0&rpt=simage&source=serp&text=картинка%20вы%20победили';
    link.style.display = 'none';
    link.click();
}

startTimer();