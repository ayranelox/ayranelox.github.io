document.addEventListener("DOMContentLoaded", function() {
    var boldParagraphs = document.querySelectorAll('p.bold');
    boldParagraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});
function getRandomColor() {
    // Генерируем случайный цвет в формате HEX
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Изменяем цвет фона каждую секунду
setInterval(changeBackgroundColor, 1000);