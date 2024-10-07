/***************************SECTION 5 TEAM SCROLL  */

const team = document.querySelector('#section5 .images')
const scrollLeft = document.querySelector('#section5 .scroll-team .left')
const scrollRight = document.querySelector('#section5 .scroll-team .right')

scrollLeft.onclick = ()=>{
    team.scrollLeft -=900
    scrollRight.classList.remove('active')
    scrollLeft.classList.add('active')
}

scrollRight.onclick = ()=>{
    team.scrollLeft +=900
    scrollLeft.classList.remove('active')
    scrollRight.classList.add('active')
}

team.addEventListener('scroll',()=>{
    if(team.scrollLeft <= 400){
        scrollRight.classList.remove('active')
        scrollLeft.classList.add('active')
    }

    else{
        scrollLeft.classList.remove('active')
        scrollRight.classList.add('active')
    }
})











/********************************************** SIDE BAR */

$('.bars').click(function(){
	$('.sidebar').toggleClass('open');
	$('.sidebar .fa-times-div').toggleClass('open');
	$('.sidebar .ul-sidebar').toggleClass('open');
	$('.sidebar .copywright').toggleClass('open');
	$('.full').toggleClass('open');
});

$('.fa-times-div').click(function(){
	$('.sidebar').removeClass('open');
	$('.sidebar .fa-times-div').removeClass('open');
	$('.sidebar .ul-sidebar').removeClass('open');
	$('.sidebar .copywright').removeClass('open');
	$('.full').removeClass('open');
});

$('.sidebar .ul-sidebar li a').click(()=>{
    $('.sidebar').toggleClass('open');
    $('.sidebar .ul-sidebar').removeClass('open');
	$('.sidebar .copywright').removeClass('open');
    $('.sidebar .fa-times-div').removeClass('open');
})

$('section').click(function(){
	$('.sidebar').removeClass('open');
    $('.sidebar .fa-times-div').removeClass('open');
	$('.sidebar .ul-sidebar').removeClass('open');
	$('.sidebar .copywright').removeClass('open');
	$('.full').removeClass('open');
});