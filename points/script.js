const points = document.querySelectorAll('.point');
const text = document.getElementById('text');
const words = ['honger', 'dierlijkheid', 'woede','kalmte',
'hemel', 'leren', 'realisatie', 'boedhisattva', 'boeddha'];

points.forEach((point, index) => {
    point.addEventListener('click', () => {
        text.textContent = words[index];
        text.style.display = 'block';
    });
});
