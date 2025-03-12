function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    clearError();
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    clearError();
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    clearError();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error("Invalid operation");
        }
        display.value = result;
    } catch (error) {
        displayError("Error: " + error.message);
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (value < 0) {
        displayError("Error: Negative value");
    } else {
        display.value = Math.sqrt(value);
    }
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
}

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Light Mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Dark Mode';
    }
});