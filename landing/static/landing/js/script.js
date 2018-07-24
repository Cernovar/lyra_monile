$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 300 ){
            $(".top-menu").css("background", "rgba(29, 119, 119, 0.9)");
            $(".top-menu").css("height", "110px");
            $(".top-menu").css("text-shadow", "white 1px 1px 10px");
            $(".top-menu, .label-header, .top-menu > ul, .menu-btn").css("transition", "all 0.9s");
            $(".label-header").css("margin-top", "50px");
            $(".top-menu > ul").css("margin-top", "35px");
            $(".menu-btn").css("top", "80px");
        }
        else if ($(window).scrollTop() <= 300 ){
            $(".top-menu").css("background", "rgba(82, 189, 176, 0.671)");
            $(".top-menu").css("height", "180px");
            $(".top-menu").css("text-shadow", "none");
            $(".label-header, .top-menu > ul").css("margin-top", "100px");
            $(".menu-btn").css("top", "130px");
        }
    });
});
   
$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 900 ){
            $(".about-me").css("margin-top", "150px", "transition", "all ease 1.2s" );   
        }
        else if ($(window).scrollTop() <= 900 ){
            $(".about-me").css("margin-top", "400px", "transition", "all ease 1.2s");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 1600 ){
            $(".top-menu").css("background", "rgba(216, 223, 232, 0.9)");
            $(".vika-say").css("top", "100px", );
            $(".vika-say").css("transition", "all ease 1s");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 2300 ){
            $(".brooches-1").css("right", "2%");
            $(".brooches-1").css("transition-delay", "1s");
            $(".brooches-2").css("right", "29%");
            $(".brooches-2").css("transition-delay", ".6s");
            $(".brooches-3").css("right", "56%");
            $(".brooches-3").css("transition-delay", ".2s");
        }  
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 2900 ){
            $(".earrings-1").css("left", "2%");
            $(".earrings-1").css("transition-delay", "1s");
            $(".earrings-2").css("left", "29%");
            $(".earrings-2").css("transition-delay", ".6s");
            $(".earrings-3").css("left", "56%");
            $(".earrings-3").css("transition-delay", ".2s");
        }  
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 3450 ){
            $(".choker").css("top", "-150px");
            $(".choker").css("transition-delay", ".9s");
            $(".bracelet").css("top", "-200px");
            $(".bracelet").css("transition-delay", ".3s");
            $(".diadem").css("top", "-150px");
            $(".diadem").css("transition-delay", "1.4s");
        }  
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 4200 ){
            $(".remaining-string, .necklaces img, .of-course-word, .endless-variety-word").css("opacity", "1");
            $(".remaining-string").css("transition", "all ease-in .9s");
            $(".of-course-word, .endless-variety-word, .necklaces img").css("transition", "all ease-in .3s");
            $(".endless-variety-word").css("transition-delay", "1s");
            $(".remaining-string").css("transition-delay", "1.7s");
            $(".necklace-1").css("transition-delay", "2.8s");
            $(".necklace-2").css("transition-delay", "2.6s");
            $(".necklace-3").css("transition-delay", "3s");
            $(".necklace-4").css("transition-delay", "3.4s");
            $(".necklace-5").css("transition-delay", "3.5s");
            $(".necklace-6").css("transition-delay", "3.2s");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 6000 ){
            $(".slider-decorations").css("margin", "100px auto");
            $(".slider-decorations").css("transition", "all ease .9s");
        }
        else if ($(window).scrollTop() <= 6000 ){
            $(".slider-decorations").css("margin", "500px auto");
            $(".slider-decorations").css("transition", "all ease .9s");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 7000 ){
            $(".slider-customers").css("margin", "100px auto");
            $(".slider-customers").css("transition", "all ease .9s");
        }
        else if ($(window).scrollTop() <= 7000 ){
            $(".slider-customers").css("margin", "500px auto");
            $(".slider-customers").css("transition", "all ease .9s");
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 7300 ){
            $(".top-menu").css("height", "0");
            $(".top-menu,.label-header, .top-menu > ul, .menu-btn").css("transition", "all 0.9s");
            $(".label-header").css("margin-top", "-100px");
            $(".top-menu > ul").css("margin-top", "-100px");
            $(".menu-btn").css("top", "-100px");
        }
    });
});

$(document).ready(function(){
    $("#menu, #footer-nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        // event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1100);
    });
});

$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        focusOnSelect: true,
        
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '100px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});

