
window.onload = function() {

    var s0 = document.getElementById('nav-bar');
    var s1 = document.getElementById('word1');
    var s2 = document.getElementById('word2');
    var s3 = document.getElementById('word3');
    var s4 = document.getElementById('word4');
    var s5 = document.getElementById('imgLogo');
    var ss;

    st = s0;
    ss = s1;
    sy = s2;
    sx = s3;
    sz = s4;
    sa = s5;

    st.style.transition = "2s";
    st.style.opacity = 0;
    st.style.display = "flex";
    var countT = 0;
    var int0 = setInterval(function(){
    countT += 1;
    st.style.opacity = countT;
    },200);
    setTimeout(function(){
        clearInterval(int0);
        },200);


    ss.style.transition = "2s";
    ss.style.opacity = 0;
    ss.style.display = "block";
    var countS = 0;
    var int1 = setInterval(function(){
    countS += 1;
    ss.style.opacity = countS;
    },400);
    setTimeout(function(){
        clearInterval(int1);
        },400);


    sy.style.transition = "2s";
    sy.style.opacity = 0;
    sy.style.display = "block";
    var countY = 0;
    var int2 = setInterval(function(){
    countY += 1;
    sy.style.opacity = countY;
    },600);
    setTimeout(function(){
        clearInterval(int2);
        },600);

    
    sx.style.transition = "2s";
    sx.style.opacity = 0;
    sx.style.display = "block";
    var countX = 0;
   var int3 =  setInterval(function(){
    countX += 1;
    sx.style.opacity = countX;
    },900);
    setTimeout(function(){
        clearInterval(int3);
        },900);
    
    sz.style.transition = "2s";
    sz.style.opacity = 0;
    sz.style.display = "block";
    var countZ = 0;
    var int4 =  setInterval(function(){
    countZ += 1;
    sz.style.opacity = countZ;
    },1100);
    setTimeout(function(){
        clearInterval(int4);
        },1100);

    sa.style.transition = "2s";
    sa.style.opacity = 0;
    sa.style.display = "block";
    var countA = 0;
     var int5 = setInterval(function(){
    countA += 1;
    sa.style.opacity = countA;
    },1300);
    setTimeout(function(){
        clearInterval(int5);
        },1300);
    



    var newsItems = document.querySelectorAll('.news-item');
    var count = 0;
    var interval = setInterval(function() {
      if (count >= newsItems.length) {
        clearInterval(interval);
        return;
      }
      newsItems[count].style.display = 'block';
      count++;
    }, 500);






  };
  
  

  document.addEventListener('DOMContentLoaded', function() {
    var newsItems = document.querySelectorAll('.news0');
    for (var i = 0; i < newsItems.length; i++) {
      newsItems[i].addEventListener('click', function(event) {
        var clickedElement = event.currentTarget;
        var titleElement = clickedElement.children[1];
        
        const url = '/newsFinder';
        const data = titleElement.textContent;
        
        fetch(`${url}?key1=${data}`)
          .then(response => {   
            if (response.ok) {
              return response.text();
            }
            throw new Error('Network response was not ok.');
          })
          .then(data => {
            const outputElement = document.getElementById('output');
            outputElement.textContent = data;
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
        
     
  });
  
}
})
  

 