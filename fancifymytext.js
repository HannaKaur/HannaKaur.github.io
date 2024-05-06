<!DOCTYPE html>
<html>
<head>
    <title>Fancify My Text</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            text-align: center;
        }

        fieldset {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }

        legend {
            font-weight: bold;
        }

        textarea {
            width: 100%;
            box-sizing: border-box;
            font-size: 16px;
        }

        button, input[type="radio"] {
            margin-right: 5px;
        }

        #textArea.fancy {
            font-weight: bold;
            color: blue;
            text-decoration: underline;
            font-size: 20px;
        }

        #textArea.boring {
            font-weight: normal;
            color: black;
            text-decoration: none;
            font-size: 16px;
        }

        #textArea.italic {
            font-style: italic;
        }

        #textArea.uppercase {
            text-transform: uppercase;
        }
    </style>
</head>
<body>
    <h1>Fancify My Text</h1>

    <fieldset>
        <legend>Text</legend>
        <textarea id="textArea" rows="4" cols="30"></textarea>
    </fieldset>

    <fieldset>
        <legend>Fancify</legend>
        <button id="biggerButton">Bigger!</button>
        <br>
        <input type="radio" id="fancyRadio" name="fancyStyle">
        <label for="fancyRadio">FancyShmancy</label>
        <input type="radio" id="boringRadio" name="fancyStyle" checked>
        <label for="boringRadio">BoringBetty</label>
        <br>
        <button id="mooButton">Moo</button>
    </fieldset>

    <script>
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
    </script>
</body>
</html>