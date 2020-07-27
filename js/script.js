const CREDIT_MIN = 0;
const CREDIT_MAX = 15000000;

const creditText = document.querySelector('#creditText');
const creditRange = document.querySelector('#creditRange');
const firstContributionText = document.querySelector('firstContributionText');

const formatterNumber = new Intl.NumberFormat('ru');
const formatterCurrency = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
});

creditText.addEventListener('focus',function(event){
    let number = '';

    for (const letter of this.value) {
        if ('0.123456789'.includes(letter)) {
            number += letter;
        }
    }

    number = parseInt(number);
    this.value = formatterNumber.format(number);
});

creditText.addEventListener('input', function (event) {
    let number = '';

    for (const letter of this.value) {
        if ('0.123456789'.includes(letter)) {
            number += letter;
        }
    }

    number = parseInt(number);

    if (number < CREDIT_MIN) {
        number = CREDIT_MIN;
    }

    if (number > CREDIT_MAX) {
        number = CREDIT_MAX;
    }


    creditRange.value = number;
    number = formatterNumber.format(number);
    this.value = number;

});

creditText.addEventListener('blur', function (event) {
    let number = '';

    for (const letter of this.value) {
        if ('0.123456789'.includes(letter)) {
            number += letter;
        }
    }

    number = parseInt(number);
    this.value = formatterCurrency.format(number);
});

creditRange.addEventListener('input', function (event) {
    creditText.value = formatterCurrency.format(parseInt(this.value));
});