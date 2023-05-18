document.addEventListener('DOMContentLoaded', function() {



var menu = document.getElementById('menu-link');
var menBut = document.getElementById('menu-lk');
menBut.addEventListener('click',function(){

    var stMenu = getComputedStyle(menu);
    
     if(stMenu.display == 'flex' && stMenu.position == 'absolute'){
      menu.style.display = 'none';
    }
    else if(stMenu.display == 'none' && stMenu.position == 'absolute'){
      menu.style.display = 'flex';
    }


    else if(stMenu.display == 'block' && stMenu.position != 'absolute'){
      menu.style.display = 'none';
    }
    else if(stMenu.display == 'none' && stMenu.position != 'absolute'){
      menu.style.display = 'block';
    }
    
    
    


})

var prevScrollpos = window.pageYOffset;
var scrollCount = 0;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // User is scrolling up
    scrollCount++;
    if (scrollCount >= 2) {
      // Scroll up twice, hide the menu
      document.getElementById('nav-bar').style.display = 'block';
    }
  } else {
    // User is scrolling down
    scrollCount = 0;
    document.getElementById('nav-bar').style.display = 'none';
  }
  prevScrollpos = currentScrollPos;
}



var searchb = document.querySelector('.search');
 
function hidesearch(){
  searchb.style.display = "none";
}


var sero = document.getElementById('searchx');
sero.addEventListener('click',function(){
  searchb.style.display = "block";
})

var box = document.querySelector('.box');
var acceptButton = document.querySelector('#accept-cookies');
var rejectButton = document.querySelector('#reject-cookies');

var rejectButton2 = document.querySelector('#reject-cookies2');
var cookie = localStorage.getItem('cookiesAccepted');

if (cookie === 'true') {
  box.style.display = 'none';
} else if (cookie === 'false') {
  box.style.display = 'none';
} else {
  box.style.display = 'block';
}

acceptButton.addEventListener('click', function() {
  var cookieName = 'cookie_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  var cookieValue = 'value_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

  document.cookie = cookieName + '=' + cookieValue + '; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/';
  localStorage.setItem('cookiesAccepted', true);
  box.style.display = 'none';
});

rejectButton.addEventListener('click', function() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  localStorage.setItem('cookiesAccepted', false);
  box.style.display = 'none';
  // set expiry date to 1 year from now
  var expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  localStorage.setItem('cookiesExpiry', expiryDate.toISOString());
});

rejectButton2.addEventListener('click', function() {
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf('=');
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  localStorage.setItem('cookiesAccepted', false);
  box.style.display = 'none';
  // set expiry date to 1 year from now
  var expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  localStorage.setItem('cookiesExpiry', expiryDate.toISOString());
  location.reload();
});

// check if cookiesAccepted is false and the expiry date has not passed
var cookiesAccepted = localStorage.getItem('cookiesAccepted');
var cookiesExpiry = localStorage.getItem('cookiesExpiry');

if (cookiesAccepted === 'false' && new Date() < new Date(cookiesExpiry)) {
  box.style.display = 'none';
}


});