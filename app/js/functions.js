const form = document.querySelector('form');
form.addEventListener('submit', (e) => {

    e.preventDefault();

    document.querySelector(".myOutput").innerHTML = `You want to borrow a total of £ ${calculateInitialAmount()}`;
    document.querySelector(".upfrontFee").innerHTML = `Based on this, the upfront admin fee (5%) will be £ ${calculateUpfrontFee()}`;
    document.querySelector(".monthlyRepayment").innerHTML = `This will be £ ${monthlyRepayment()} per month`;

    function calculateInitialAmount() {
        let amount = parseInt(document.querySelector("#borrowAmount").value);

        if (amount > 6400 && amount <= 7200) {
            amount += 500;
        } else if
        (amount > 7200) {
            amount += 1000;
        }
        return amount;
    }

    function calculateUpfrontFee() {
        let upfrontAmount = document.querySelector("#borrowAmount").value;
        upfrontAmount = (upfrontAmount/100)*5;
        return upfrontAmount
    }

    function monthlyRepayment () {
        let monthlyAmount = document.querySelector("#expectedSalary").value;
        let outgoing = (monthlyAmount/12);
        let monthlyPercent = document.querySelector("#monthlyPercent").value / 100;
        let outcome = outgoing * monthlyPercent;
        return parseFloat(outcome).toFixed(2)
    }

    function showBorrowedAmountError() {
              document.querySelector('#borrowedAmountError').innerHTML = 'You can only borrow between £1 and £8000'
         }
});