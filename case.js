/*
1. add even listener to the plus buttton
2.get the value inside the case number field (input field)
3.cover the number to an interger
4.calculate the new case number5. set the value to the case number filed internal
*/ 

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById
    ('case-number-field')
    const caseNumberFieldString = caseNumberField.
    value;
    const previousCaseNumber = parseInt
    (caseNumberFieldString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber -1;
    }   
    caseNumberField.value = newCaseNumber; 

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById
   ('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumber = updateCaseNumber(true);
    

   updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();
});

 document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
   
         updateCaseTotalPrice(newCaseNumber);
         calculateSubTotal();
 })
 