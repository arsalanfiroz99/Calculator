document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                try {
                    display.value = eval(display.value);
                    if (display.value === Infinity || display.value === -Infinity) {
                        display.value = 'Error';
                    }
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (button.textContent === 'C') {
                display.value = '';
            } else if (button.textContent === '±') {
                display.value = parseFloat(display.value) * -1;
            } else if (button.textContent === '√') {
                if (parseFloat(display.value) < 0) {
                    display.value = 'Error';
                } else {
                    display.value = Math.sqrt(parseFloat(display.value));
                }
            } else if (button.textContent === '%') {
                display.value = parseFloat(display.value) / 100;
            } else if (button.textContent === '.') {
                if (!display.value.includes('.')) {
                    display.value += '.';
                }
            } else {
                display.value += button.textContent;
            }
        });
        
    });
    document.addEventListener('keydown', event => {
        const key = event.key;

        // Define mapping between keyboard keys and calculator buttons
        const keyMap = {
            'Enter': '=',
            'Escape': 'C',
            'Backspace': '←',
            '+': '+',
            '-': '-',
            '*': 'x',
            '/': '÷',
            '.': '.',
            '%': '%',
            '(': '(',
            ')': ')',
            '0': '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
        };

        // If the pressed key is mapped to a calculator button, simulate a click on that button
        if (keyMap[key]) {
            document.querySelector(`button:contains('${keyMap[key]}')`).click();
        }
    });
});
