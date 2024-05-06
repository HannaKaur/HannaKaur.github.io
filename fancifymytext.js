const textArea = document.getElementById('textArea');
const biggerButton = document.getElementById('biggerButton');
const fancyRadio = document.getElementById('fancyRadio');
const boringRadio = document.getElementById('boringRadio');
const mooButton = document.getElementById('mooButton');

function updateFancyStyle() {
    textArea.classList.toggle('fancy', fancyRadio.checked);
    textArea.classList.toggle('boring', boringRadio.checked);
}

function makeBigger() {
    const currentFontSize = parseInt(window.getComputedStyle(textArea).fontSize);
    textArea.style.fontSize = `${currentFontSize + 2}pt`;
}

function moo() {
    const text = textArea.value.toUpperCase();
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0);
    const modifiedSentences = sentences.map(sentence => {
        const words = sentence.trim().split(' ');
        const lastWord = words.pop();
        words.push(`${lastWord}-Moo`);
        return words.join(' ');
    });
    const modifiedText = modifiedSentences.join('. ') + '.';
    textArea.value = modifiedText;
}

function randomizeFancy() {
    const styles = ['fancy', 'boring', 'italic', 'uppercase'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    textArea.className = `${randomStyle}`;
}

biggerButton.addEventListener('click', makeBigger);
fancyRadio.addEventListener('change', updateFancyStyle);
boringRadio.addEventListener('change', updateFancyStyle);
mooButton.addEventListener('click', moo);
textArea.addEventListener('dblclick', randomizeFancy);

updateFancyStyle();
