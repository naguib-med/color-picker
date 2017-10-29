document.getElementById('random-color-btn').addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('color-display').innerText = `Color: ${randomColor}`;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
