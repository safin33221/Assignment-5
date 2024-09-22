document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount');
    let availableBalance = getTextFildById('donate-balance')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;

    let historySection = document.getElementById('history-section');
    
    historySection.innerHTML += `
    <div class="border-2 p-6 rounded-lg w-11/12 mx-auto mb-4">
                    <h1 class="text-xl font-bold text-secondary">${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                    <p class="text-success text-lg">Date : ${new Date()}</p>
                </div>
    `

})
document.getElementById('donate-btn2').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount2');
    let availableBalance = getTextFildById('donate-balance2')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance2').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;


    let historySection = document.getElementById('history-section');
    historySection.innerHTML += `
    <div class="border-2 p-6 rounded-lg w-11/12 mx-auto mb-4">
                    <h1 class="text-xl font-bold text-secondary">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
                    <p class="text-success text-lg">Date : ${new Date()}</p>
                </div>
    `
})
document.getElementById('donate-btn3').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputFildById('donate-amount3');
    let availableBalance = getTextFildById('donate-balance3')
    let currentBalance = getTextFildById('current-balance');
    document.getElementById('donate-balance3').innerText = availableBalance + donateAmount;
    document.getElementById('current-balance').innerText = currentBalance - donateAmount;


    let historySection = document.getElementById('history-section');
    historySection.innerHTML += `
    <div class="border-2 p-6 rounded-lg w-11/12 mx-auto mb-4">
                    <h1 class="text-xl font-bold text-secondary">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                    <p class="text-success text-lg">Date : ${new Date()}</p>
                </div>
    `
})