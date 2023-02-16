function getValue(id) {
    const input = document.getElementById(id);
    const value = parseInt(input.value);
    // input.value = '';
    return value;

}



function getInnerText(id) {
    const innerText = document.getElementById(id);
    const text = parseInt(innerText.innerText);
    return text;
}

function setInnerText(id, value) {
    const set = document.getElementById(id);
    set.innerText = value;
}


// function alert(value){
//     if(isNaN(value) || value<0){
//        alert('Invalid amount');
//     }
// }

// calculate btn
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getValue('income');

    if (isNaN(income) || income < 0) {
        alert('Invalid amount');
    }

    // alert(income);


    const rent = getValue('rent');
    if (isNaN(rent) || rent < 0 || rent > income) {
        return alert('Invalid amount');
    }
    // alert(rent);

    const food = getValue('food');
    if (isNaN(food) || food < 0 || food > income) {
        return alert('Invalid amount');
    }
    // alert(food);

    const cloth = getValue('cloth');
    if (isNaN(cloth) || cloth < 0 || cloth > income) {
        return alert('Invalid amount');
    }
    // alert(cloth);


    const totalExpense = rent + food + cloth;
    console.log(totalExpense);

    const remainingBalance = income - totalExpense;
    console.log(remainingBalance);

    setInnerText('total-expense', totalExpense);
    setInnerText('balance', remainingBalance);

})


// save btn
document.getElementById('save-btn').addEventListener('click', function () {
    const balance = getInnerText('balance');
    const income = getValue('income');
    const svp = getValue('parcent');

    const saving = (income / 100) * svp;

    if (saving > balance) {
        return alert('invalid');
    }
    setInnerText('saving-amount', saving);

    const b = balance - saving;
    setInnerText('last-balance', b);


})