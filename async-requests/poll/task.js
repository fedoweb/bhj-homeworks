
const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhrGet.responseType = 'json';
xhrGet.send();

const question = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const xhrPost = new XMLHttpRequest;

xhrGet.onload = function() {
    
    question.insertAdjacentHTML('afterbegin', `${xhrGet.response.data.title}`);
    
    const responseAnswers = xhrGet.response.data.answers;

    responseAnswers.forEach(answer => {
        answers.insertAdjacentHTML('beforeend', `
            <button class="poll__answer">
              ${answer}
            </button>
        `);

        const answerButton = answers.lastElementChild;
        answerButton.addEventListener('click', (e) => {
            let answerTarget = e.target.textContent;
            alert('Спасибо, ваш голос засчитан!');
            
            const answerIndex = responseAnswers.indexOf(answerTarget.trim());
            const answerPost = `vote=${xhrGet.response.id}&answer=${answerIndex}`;
                        
            xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhrPost.responseType = 'json';
            xhrPost.send(answerPost);

            
        });
    }); 
};


xhrPost.onload = function() {  
    const stats = xhrPost.response.stat;

    let totalQuantity = 0;

    stats.forEach(stat => {
        return totalQuantity += stat.votes;
    });

    stats.forEach(stat => {
        answers.innerHTML = '';
        question.insertAdjacentHTML('beforeend', `
            <div>
            ${stat.answer}: ${(stat.votes / totalQuantity * 100).toFixed(2)} %
            </div>
        `);
    });
};



