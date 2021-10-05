$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: true,
        autoPlay: true
    });
});
    
    // Navbar  
    function activeNav(id) {
        $('.nav-link').each(function(key,value){
            if(key == id){
                $(value).css('color','#9A1750')
            }
        })
    }
    // Navbar End