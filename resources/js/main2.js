$(document).ready(function(){

 //STICKY MENU
 $(".js--services-section").waypoint( function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    }
    else{
        $("nav").removeClass("sticky");
    }
});

// ACTIVE LINK
$("nav ul li a").click(function () {
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
    
});
$("nav a img.logo").click(function () {
    $("nav ul li a").removeClass("active");
    $("nav ul li:first-child a").addClass("active");
    
});

// MIXITUP  (PORTFOLIO SECTION)
var mixer = mixitup('.container');

   // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

