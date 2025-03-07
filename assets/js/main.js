

AOS.init({

  offset: 120, //in px
  delay: 0, 
  duration: 900, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});

$(document).ready(function() {
  $("#includeTransition").show();
  $("#includeTransition").fadeIn(2000, function() {
      setTimeout(function() {
          $("#includeTransition").fadeOut(1500, function() {
              $(this).hide();
              $("body").css("overflow", "auto");  
          });
      }, 3000); 
  });
});








