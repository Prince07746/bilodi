
setTimeout(function(){
    var s0 = document.getElementById('nav-bar');
    var s2 = document.getElementById('cont-text');
    st = s0;
    sy = s2;

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

        
        sy.style.transition = "2s";
        sy.style.opacity = 0;
        sy.style.display = "block";
        var countY = 0;
        var int2 = setInterval(function(){
        countY += 1;
        sy.style.opacity = countY;
        },400);
        setTimeout(function(){
            clearInterval(int2);
            },400);


    
},1000);



