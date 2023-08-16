// Setp 1: Add Event Listener to the Input Button
const btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function () {

    // Step 2: Get the Deposit value from the Form
    const inputDeposit = document.getElementById("input-deposit");
    const depositAmount = inputDeposit.value;

    // Step 3: Get the Deposit Total from Html
    const deposit = document.getElementById('deposit-total');
    const depositTotalValue = deposit.innerText;

    // Step 4: Get the Balance, Balance Amount, 
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;

    deposit.innerText = parseInt(depositAmount) + parseInt(depositTotalValue);
    balance.innerText = parseInt(depositAmount) +  parseInt(balanceAmount)
    inputDeposit.value = '';
});



