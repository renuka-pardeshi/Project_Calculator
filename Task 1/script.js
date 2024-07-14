// Initialize variables to store the display value and a flag to indicate if a result has been calculated
let displayValue = '';
let resultCalculated = false;

// Function to append a value to the display
function appendValue(value) {
    if (resultCalculated) {
        displayValue = '';
        resultCalculated = false;
    }
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = displayValue;
    resultCalculated = false;
}

// Function to remove the last character from the display
function back() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue;
}

// Function to calculate the result of the current expression
function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').innerText = displayValue;
        resultCalculated = true;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').innerText = displayValue;
        resultCalculated = false;
    }
}