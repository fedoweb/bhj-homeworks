document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.getElementById('clearButton');

    // Восстановление текста при загрузке страницы
    if (localStorage.getItem('editorText')) {
        editor.value = localStorage.getItem('editorText');
    }

    // Обработчик изменения содержимого textarea
    editor.addEventListener('input', () => {
        localStorage.setItem('editorText', editor.value);
    });

    // Обработчик очистки содержимого
    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editorText');
    });
});