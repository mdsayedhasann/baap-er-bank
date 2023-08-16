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