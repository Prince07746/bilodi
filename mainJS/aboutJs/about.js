window.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    content.style.opacity = 1;
    content.style.transform = 'translateX(0)';
  });
  
  
  const form = document.querySelector('form');
    const card = {
      number: document.getElementById('card-number').value,
      exp_month: document.getElementById('expiry-date').value.slice(0, 2),
      exp_year: document.getElementById('expiry-date').value.slice(3),
      cvc: document.getElementById('cvc').value
    };
    

    var stripe = Stripe('pk_test_51MmgI0GciPY0j0V7M6m4wWHNm5anwZw6Ta67kFMZnrEx2q0Szq5C0XiqehlCiw68k3GYPstkOI1waNttAS7Krj1Y00MwSxpazX');
    function check(){
      stripe.redirectToCheckout({
        items: [{sku: 'price_1MncQOGciPY0j0V7BCTB60mr', quantity: 1}],
        successUrl: 'http://127.0.0.1:3030/',
        cancelUrl: 'http://127.0.0.1:3030/donateRequest',
      })
      .then(function(result) {
        // Handle any errors that occur.
      });
    };