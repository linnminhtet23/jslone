const terms = document.getElementById('years');
const bubble = document.querySelector('.bubble');

const loanform = document.getElementById('loan-form');
const loader =  document.getElementById('loading')

//Event Listener
terms.addEventListener('input', function(){
    const val =terms.nodeValue;
    bubble.textContent= value>1 ? `${val} Months`: `${val} Month`;
});
loanform.addEventListener('submit', function(e){
    // show loader
    loader.style.display = 'block';
    
    setTimeout(calculateresult,1000);

    e.preventDefault();
});

//Calculate Result
function calculateresult(){
    // console.log('calculating...')
    const amount = document.getElementById('amount');
    const interest =document.getElementById('interest');
    
    const monthlypayment = document.getElementById('monthly-payment');
    const totalinterest = document.getElementById('total-interest');
    const totalpayment = document.getElementById('total-payment');

    const getprincipal = parseFloat(amount.value);
    const getinterest =  parseFloat(interest.value)/12;//for one year divided by 12
    const getterm = parseFloat(terms.value);// get the number of month from range 
    // console.log(getprincipal);
}