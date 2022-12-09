var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 0;
showSlides();
function showSlides() {
var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

//nav bar
$(function(){
    var n= "#nav";
    var no = ".nav-items";
    $(n).click(function(){
       if($(no).hasClass("nav-open")){
         $(no).animate({height:0},300);
             setTimeout(function(){
          $(no).removeAttr('style').removeClass("nav-open");
         },320);
       }else{
         var h = $(no).css("height","auto").height();
         $(no).height(0).animate({height:h},300);
         setTimeout(function(){
          $(no).removeAttr('style').addClass("nav-open");
         },320);
       }
    });
  });