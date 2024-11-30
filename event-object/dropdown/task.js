const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));


function openList() {
    dropdownList.classList.add('dropdown__list_active');
};

function closeList() {
    dropdownList.classList.remove('dropdown__list_active');
}

function changeDropdownValue() {
    dropdownValue.textContent = this.textContent;
}

dropdownValue.addEventListener('click', openList);

dropdownItem.forEach(function(item) {
    item.addEventListener('click', closeList);
    item.addEventListener('click', changeDropdownValue);
    item.addEventListener('click', event => event.preventDefault());
});