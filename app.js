


// ---
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
    // caseInput.value = parseInt(caseNumber) + 1;
    caseNumber = parseInt(caseNumber) + 1;

    }
    else if(caseNumber > 0){
    // caseInput.value = parseInt(caseNumber) - 1;
    caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
};

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updatePhoneNumber(true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false);
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
});