const form = document.getElementById('form');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
    
    xhr.upload.onprogress = function(e) {
        const progress = document.getElementById( 'progress' );
        progress.value = e.loaded / e.total;
    };

    xhr.upload.onerror = function(e) {
        alert('Ошибка загрузки данных!');
    };

    xhr.upload.onload = function() {
        alert('Данные загружены!');
    };    
});
