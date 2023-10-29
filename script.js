// Declaring Select elements
const form = document.getElementById('tipCalculator');
const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipSliderInput = document.getElementById('tipSlider');
const tipAmountInput = document.getElementById('tipAmount');
const totalWithTipInput = document.getElementById('totalWithTip');

// Declaring Event listener for form changes
form.addEventListener('input', function() {
// Get values
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseFloat(tipSliderInput.value);

// Verifying bill total
  if (isNaN(billTotal)) {
    alert('Please enter a valid bill total.');
    return;
  }

// Calculating tip amount and total with tip
  const tipAmount = (billTotal * tipPercentage) / 100;
  const totalWithTip = billTotal + tipAmount;

// Updating the inputs with the calculated values
  tipPercentageInput.value = tipPercentage.toFixed(2) + '%';
  tipAmountInput.value = tipAmount.toFixed(2);
  totalWithTipInput.value = totalWithTip.toFixed(2);
});
