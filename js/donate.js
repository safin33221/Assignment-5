document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount');
    let availableBalance = getTextFildById('donate-balance')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;
})
document.getElementById('donate-btn2').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount2');
    let availableBalance = getTextFildById('donate-balance2')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance2').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;
})
document.getElementById('donate-btn3').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount3');
    let availableBalance = getTextFildById('donate-balance3')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance3').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;
})