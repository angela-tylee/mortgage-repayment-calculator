const form = document.querySelector('form');
const calculatorBtn = document.querySelector('#calculator-btn');
const clearAllBtn = document.querySelector('#clear-all');
const resultCompleted = document.querySelector('.result-completed');
const resultEmpty = document.querySelector('.result-empty');
const monthlyResult = document.querySelector('#monthly-repayment');
const totalResult = document.querySelector('#total-repayment');

calculatorBtn.addEventListener('click', calculateMortgage);
clearAllBtn.addEventListener('click', clearForm); //

function clearForm() {
  form.reset();
  hideResult();
  resetRadioStyle();
}

function calculateMortgage() {

  let principal = document.querySelector('.input-amount').value;
  let loanTermYears = document.querySelector('.input-term').value;
  let annualInterestRate = document.querySelector('.input-rate').value;
  let mortgageType = document.querySelector('input[name="type"]:checked').value;

  let repayment = 0;
  let totalRepayment = 0;
  let interestOnlyPayment = 0;
  let totalInterestOnlyPayment = 0;

  if (mortgageType === "repayment") {

    // Function to calculate standard repayment mortgage
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let numberOfPayments = loanTermYears * 12;
    repayment = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    totalRepayment = repayment * loanTermYears * 12

    document.querySelector('#monthly-repayment').textContent = repayment.toFixed(2);
    document.querySelector('#total-repayment').textContent = totalRepayment.toFixed(2);

    // format number
    monthlyResult.textContent = formatNumber(monthlyResult.textContent);
    totalResult.textContent = formatNumber(totalResult.textContent);
  } else if (mortgageType === 'interestOnly') {
    
  // Function to calculate interest-only mortgage
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    interestOnlyPayment = principal * monthlyInterestRate;
    totalInterestOnlyPayment = interestOnlyPayment * loanTermYears * 12
    
    document.querySelector('#monthly-repayment').textContent = interestOnlyPayment.toFixed(2);
    document.querySelector('#total-repayment').textContent = totalInterestOnlyPayment.toFixed(2);

    // format number
    monthlyResult.textContent = formatNumber(monthlyResult.textContent);
    totalResult.textContent = formatNumber(totalResult.textContent);
  }
  showResult();
}

function showResult() {
  resultEmpty.classList.add("hidden");
  resultCompleted.classList.remove("hidden");
}
function hideResult() {
  resultEmpty.classList.remove("hidden");
  resultCompleted.classList.add("hidden");
}

const radioInputs = document.querySelectorAll('#radio-input-group');

radioInputs.forEach((option) => {
  option.querySelector('input').addEventListener('click', () => {
    resetRadioStyle();
    option.classList.add('radio-input-checked');
  });

});

function resetRadioStyle() {
  radioInputs.forEach((option) => {
    option.classList.remove('radio-input-checked');
  })
}


// format numbers

function formatNumber(value, finalFormat = false) {

    // Remove any non-numeric characters except for decimal points and hyphens
    value = value.replace(/[^0-9.-]/g, '');


    if (value) {
        let parts = value.split('.');
        let integerPart = parts[0];
        let decimalPart = parts[1] ? '.' + parts[1] : '';

        // Add commas to the integer part
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Combine parts and set the formatted value
        value = integerPart + decimalPart;

        // Add currency symbol and negative sign if necessary
        if (finalFormat) {
            value = (value.startsWith('-') ? '-$' : '$') + value.replace('-', '');
        }

        return value;
    }
};

