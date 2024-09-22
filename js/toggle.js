document.getElementById('history-btn').addEventListener('click',function(){
    let donatationSection = document.getElementById('donation-seciton');
    donatationSection.classList.add('hidden')
    let historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');

    
    document.getElementById('donatation-btn').classList.remove('bg-primary')
    
    document.getElementById('history-btn').classList.add('bg-primary')

    
})
document.getElementById('donatation-btn').addEventListener('click',function(){
    let donatationSection = document.getElementById('donation-seciton');
    donatationSection.classList.remove('hidden')
    let historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');


    document.getElementById('history-btn').classList.remove('bg-primary')
    
    document.getElementById('donatation-btn').classList.add('bg-primary')

    
})