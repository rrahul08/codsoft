let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerText);
    });
});

document.addEventListener('keydown', (e) => {
    handleKeyPress(e.key);
});

function handleButtonClick(buttonText) {
    
    switch (buttonText) {
        case 'AC':
            display.innerText = '';
            break;
        case '=':
            try {
                display.innerText = evaluateExpression(display.innerText);
            } catch {
                display.innerText = "Error";
            }
            break;
        case '<=':
            if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        default:
            if (isValidInput(buttonText)) {
                display.innerText += buttonText;
            }
    }
}

function handleKeyPress(key) {
    if (key === 'Enter') {
        handleButtonClick('=');
    } else if (key === 'Backspace') {
        handleButtonClick('<=');
    } else if (key === 'Escape') {
        handleButtonClick('AC');
    } else if (isValidInput(key)) {
        handleButtonClick(key);
    }
}

function isValidInput(input) {
    const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '(', ')'];
    return validChars.includes(input);
}


function evaluateExpression(expression) {
    try {
        const result = eval(expression);
        return result.toFixed(10); 
    } catch {
        return "Error";
    }
}
