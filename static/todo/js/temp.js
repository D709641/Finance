$( document ).ready(function() {
    var child = 1;
    var length = $("section .register-usr").length - 1;
    
    $("section .register-usr").not("section .register-usr:nth-of-type(1)").hide();
    $("section .register-usr").not("section .register-usr:nth-of-type(1)").css('transform','translateX(100px)');
     
    $(".individual-btn").click(function () {
        if (child <= length) {
          child++;
        }

      var currentSection = $("section .register-usr:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      console.log("curriansd", currentSection);
      currentSection.css('transform','translateX(0)');
      currentSection.nextAll('section .register-usr').css('transform','translateX(100px)');
      $('section .register-usr').not(currentSection).hide();
    });

    $(".prev-sec").click(function () {
      var id = $(this).attr("id");
        if (child > 1) {
          child--;
        }

      var currentSection = $("section .register-usr:nth-of-type(" + child + ")");
      currentSection.fadeIn();
      console.log("curriansd", currentSection);
      currentSection.css('transform','translateX(0)');
      currentSection.nextAll('section .register-usr').css('transform','translateX(100px)');
      $('section .register-usr').not(currentSection).hide();
    });
    
});
