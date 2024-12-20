
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

xhr.onload = function() {
    console.log(xhr.response.data);
    
    question.insertAdjacentHTML('afterbegin', `${xhr.response.data.title}`);

    
    const responseAnswers = xhr.response.data.answers;

    responseAnswers.forEach(answer => {
        answers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
              ${answer}
            </button>
        `);

        const answerButton = answers.lastElementChild;
        answerButton.addEventListener('click', (e) => {
            console.log(e.target);
            alert('Спасибо, ваш голос засчитан!');
        });
    });    
};
