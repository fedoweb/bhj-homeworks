const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
    console.log(xhr.response['response'].Valute);
    const loader = document.getElementById('loader');
    const responseValute = xhr.response['response'].Valute;
    const item = document.getElementById('items');

    loader.classList.remove('loader_active');

    for (const valuteItem in responseValute) {
        console.log(valuteItem);
        const charCode = xhr.response['response'].Valute[valuteItem].CharCode;
        const value = xhr.response['response'].Valute[valuteItem].Value;
        item.insertAdjacentHTML('beforeend', `
        <div class="item">    
            <div class="item__code">
                ${charCode}
            </div>
            <div class="item__value">
            ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `);
    };    
};