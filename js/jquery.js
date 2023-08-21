const depth1 =$('.depth1');
depth1.hover(
    function(){
        $('.depth2').css('display', 'block');
        $('header').addClass('on');
    },
    function(){
        $('.depth2').css('display', 'none');
        $('header').removeClass('on');
    }
);


// depth1.addEventListener('mouseover',function(){depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='block'})
// document.querySelector('header').classList.add('on');});
    
// depth1.addEventListener('mouseout',function(){depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='none'})
// document.querySelector('header').classList.remove('on');});
