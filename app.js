/* function updatePhoneNumber(isIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if(isIncreasing == true){
    // phoneInput.value = parseInt(phoneNumber) + 1;
    phoneNumber = parseInt(phoneNumber) + 1;

    }
    else if(phoneNumber > 0){
    // phoneInput.value = parseInt(phoneNumber) + 1;
    phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    //update case total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
}; */


// ---
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
    // productInput.value = parseInt(productNumber) + 1;
    productNumber = parseInt(productNumber) + 1;

    }
    else if(productNumber > 0){
    // productInput.value = parseInt(productNumber) - 1;
    productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
};

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});