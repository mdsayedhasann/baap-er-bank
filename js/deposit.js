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



/**
 * WithDraw Part Start 
 */

const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function () {
    // Step 1: Get Withdraw Form Data and Value
    const inputWithdraw = document.getElementById('input-withdraw');
    const withdrawAmount = inputWithdraw.value;

    // Step 2: Get the Withdraw box from Html and Its value
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;



    // Step 3: Get the Balance and Balance Value 
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;


    // Step 4:  Counting -- 
    // Withdrawal 
    if (withdrawAmount <= balanceAmount) {
        withdrawTotal.innerText = parseInt(withdrawAmount) + parseInt(withdrawTotalAmount);
        // Total Balance 
        balance.innerText = parseInt(balanceAmount) - parseInt(withdrawAmount);
        inputWithdraw.value = ''
    }else{
        alert('You can withdraw less than Balance Value')
    }

})