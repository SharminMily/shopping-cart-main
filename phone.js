function updatePhoneNumber (isIncase){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumerString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumerString);
    let newPhoneNumber;

    if(isIncase){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber -1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber ;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 89;
    const phoneTotalElement = document.
   getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
     
}




document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);
   
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber =  updatePhoneNumber(false);
 
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
});