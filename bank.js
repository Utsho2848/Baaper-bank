
function addDeposit() {
    const depositField = document.getElementById('deposit-field');
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositField.innerText);
    const depositInputAmount = parseFloat(depositInput.value);
    depositInput.value = '';
    return depositField.innerText = depositAmount + depositInputAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    totalDepoAmount()
    addDeposit()
})

function addWithdraw(event) {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawField.innerText);
    const inputAmount = parseFloat(withdrawInput.value)
    withdrawInput.value = '';
    return withdrawField.innerText = withdrawAmount + inputAmount;

}
document.getElementById('withdraw-btn').addEventListener('click', function () {
    totalWithdrawAmount()
    addWithdraw()
})

function totalDepoAmount() {
    let totalAmount = document.getElementById('total-amount');
    let totalBalance = parseFloat(totalAmount.innerText);
    const deposit = document.getElementById('deposit-input').value;
    return totalAmount.innerText = totalBalance + parseFloat(deposit);
}

function totalWithdrawAmount() {
    let totalAmount = document.getElementById('total-amount');
    let totalBalance = parseFloat(totalAmount.innerText);
    const withdraw = document.getElementById('withdraw-input').value;
    return totalAmount.innerText = totalBalance - parseFloat(withdraw);
}


