AOS.init({
  offset: 120,
  delay: 0,
  duration: 900,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

window.addEventListener("load", () => {
  AOS.refresh();
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








