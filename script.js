$(document).ready(function(){
    $('header').load('header.html');
    // $('footer').load('footer.html');

setTimeout(()=>{
    
    $('.btn-open-poppup').click(function(){
        $('.poppup-mobile').addClass('active');
        $('.overlay').addClass('active');
    })
    $('.overlay').click(function(){
        $(this).removeClass('active');
        $('.poppup-mobile').removeClass('active');
    })
},1000)
})