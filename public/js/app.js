$(document).ready(function(){
    $(".content-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        speed: 500,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrows'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrows'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                
              }
            },
            
            
            
            
          ]

    

    });
  });



  $(document).ready(function(){
    $(".content-slider2").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:true,
        speed: 500,
        prevArrow:
        `<button type='button' class='slick-prev slick-arrows'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:
        `<button type='button' class='slick-next slick-arrows'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
            
            
            
            
           ]

    

     });
  });


 